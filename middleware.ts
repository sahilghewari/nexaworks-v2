import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { buildCorsHeaders } from "@/lib/cors";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 60;

type RateLimitEntry = {
  hits: number;
  windowStart: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return request.ip ?? request.headers.get("x-real-ip") ?? "unknown";
}

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const now = Date.now();
  const origin = request.headers.get("origin");
  const corsHeaders = buildCorsHeaders(origin);

  if (request.method === "OPTIONS") {
    const response = NextResponse.next();
    Object.entries(corsHeaders).forEach(([header, value]) => {
      response.headers.set(header, value);
    });
    return response;
  }

  const key = getClientKey(request);
  const entry = rateLimitStore.get(key);

  if (!entry) {
    rateLimitStore.set(key, { hits: 1, windowStart: now });
  } else if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(key, { hits: 1, windowStart: now });
  } else {
    entry.hits += 1;
    if (entry.hits > RATE_LIMIT_MAX_REQUESTS) {
      const resetSeconds = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - entry.windowStart)) / 1000);
      return new NextResponse(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(resetSeconds),
            "X-RateLimit-Limit": String(RATE_LIMIT_MAX_REQUESTS),
            "X-RateLimit-Remaining": "0",
            ...corsHeaders,
          },
        }
      );
    }
  }

  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Limit", String(RATE_LIMIT_MAX_REQUESTS));

  const updatedEntry = rateLimitStore.get(key);
  const remaining = updatedEntry ? Math.max(RATE_LIMIT_MAX_REQUESTS - updatedEntry.hits, 0) : RATE_LIMIT_MAX_REQUESTS;
  response.headers.set("X-RateLimit-Remaining", String(remaining));

  Object.entries(corsHeaders).forEach(([header, value]) => {
    response.headers.set(header, value);
  });

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
