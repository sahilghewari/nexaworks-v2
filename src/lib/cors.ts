const defaultOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const allowedOrigins = new Set<string>([
  defaultOrigin,
  "http://localhost:3000",
  "https://nexaworks.com",
]);

export function resolveOrigin(originHeader?: string | null) {
  if (!originHeader) return defaultOrigin;
  return allowedOrigins.has(originHeader) ? originHeader : defaultOrigin;
}

export function buildCorsHeaders(originHeader?: string | null) {
  const origin = resolveOrigin(originHeader);

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
  } as Record<string, string>;
}
