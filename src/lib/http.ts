import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { buildCorsHeaders } from "@/lib/cors";

interface JsonResponseInit extends ResponseInit {
  headers?: Record<string, string>;
}

export function jsonResponse<T>(request: NextRequest | Request, data: T, init?: JsonResponseInit) {
  const origin = request.headers.get("origin");
  const corsHeaders = buildCorsHeaders(origin);

  return NextResponse.json(data, {
    ...init,
    headers: {
      ...corsHeaders,
      ...(init?.headers ?? {}),
    },
  });
}

export function emptyResponse(request: NextRequest | Request, init?: JsonResponseInit) {
  const origin = request.headers.get("origin");
  const corsHeaders = buildCorsHeaders(origin);

  return new NextResponse(null, {
    ...init,
    headers: {
      ...corsHeaders,
      ...(init?.headers ?? {}),
    },
  });
}
