import { connection } from "next/server";

import type { ClaimsListResponse } from "@/types/api";
import { getCurrentEmployeeId } from "@/lib/server/current-employee";
import { listClaims } from "@/lib/server/claims-repo";
import { serverError } from "@/lib/server/http";

/** The signed-in employee's claims, newest first. */
export async function GET() {
  await connection();

  try {
    const claims = await listClaims(getCurrentEmployeeId());
    return Response.json({ claims } satisfies ClaimsListResponse);
  } catch (cause) {
    return serverError("GET /api/claims", cause);
  }
}
