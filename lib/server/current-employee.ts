import "server-only";

import { EmployeeSchema, type Employee } from "@/types/api";
import { getSupabaseAdmin } from "@/lib/supabase/server";

/**
 * The demo has no login: every request acts as E001 (Meera Nair, L2).
 * Replace this function when real authentication is added.
 */
export const DEMO_EMPLOYEE_ID = "E001";

export function getCurrentEmployeeId(): string {
  return DEMO_EMPLOYEE_ID;
}

/** Loads the signed-in employee, or null if the row is missing. */
export async function getCurrentEmployee(): Promise<Employee | null> {
  const { data, error } = await getSupabaseAdmin()
    .from("employees")
    .select("id, name, email, grade, department, manager_name, base_city")
    .eq("id", getCurrentEmployeeId())
    .maybeSingle();

  if (error) throw new Error(`employees query failed: ${error.message}`);
  return data ? EmployeeSchema.parse(data) : null;
}
