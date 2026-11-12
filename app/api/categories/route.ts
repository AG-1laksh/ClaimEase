import { connection } from "next/server";

import type { CategoriesResponse } from "@/types/api";
import { getCurrentEmployee } from "@/lib/server/current-employee";
import { listPolicyRules } from "@/lib/server/claims-repo";
import { apiError, serverError } from "@/lib/server/http";

/** Policy rules for the signed-in employee's grade. */
export async function GET() {
  await connection();

  try {
    const employee = await getCurrentEmployee();
    if (!employee) return apiError(404, "NOT_FOUND", "Employee not found.");

    const categories = await listPolicyRules(employee.grade);
    return Response.json({ categories } satisfies CategoriesResponse);
  } catch (cause) {
    return serverError("GET /api/categories", cause);
  }
}
