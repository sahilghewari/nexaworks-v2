import type { NextRequest } from "next/server";
import { caseStudies } from "@/lib/data/case-studies";
import { jsonResponse, emptyResponse } from "@/lib/http";

export async function OPTIONS(request: NextRequest) {
  return emptyResponse(request, { status: 204 });
}

export async function GET(request: NextRequest) {
  return jsonResponse(request, {
    data: caseStudies,
  });
}
