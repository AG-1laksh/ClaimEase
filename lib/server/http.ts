import "server-only";

import type { ApiErrorCode, ApiErrorResponse } from "@/types/api";

/** Builds an error response in the shape documented in docs/api-contract.md. */
export function apiError(
  status: number,
  code: ApiErrorCode,
  message: string,
  fields?: Record<string, string[]>,
): Response {
  const body: ApiErrorResponse = { error: { code, message, ...(fields ? { fields } : {}) } };
  return Response.json(body, { status });
}

/**
 * Logs the real cause on the server and returns a generic 500,
 * so database details never reach the browser.
 */
export function serverError(context: string, cause: unknown): Response {
  console.error(`[api] ${context}:`, cause);
  return apiError(500, "SERVER_ERROR", "Something went wrong on the server. Please try again.");
}
