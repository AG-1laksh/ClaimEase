import { connection } from "next/server";

import type { MeResponse } from "@/types/api";
import { getCurrentEmployee } from "@/lib/server/current-employee";
import { apiError, serverError } from "@/lib/server/http";

export async function GET() {
  await connection(); // per-request data: never prerender at build time

  try {
    const employee = await getCurrentEmployee();
    if (!employee) return apiError(404, "NOT_FOUND", "Employee not found.");
    return Response.json({ employee } satisfies MeResponse);
  } catch (cause) {
    return serverError("GET /api/me", cause);
  }
}
