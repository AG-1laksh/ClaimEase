import "server-only";

import { ClaimSchema, PolicyRuleSchema, type Claim, type Grade, type PolicyRule } from "@/types/api";
import { getSupabaseAdmin } from "@/lib/supabase/server";

const CLAIM_COLUMNS =
  "id, employee_id, category, amount, expense_date, description, has_receipt, status, policy_check, created_at";
const RULE_COLUMNS = "category, grade, max_amount, receipt_required_above, notes";

/** numeric(10,2) may arrive as a string depending on the driver; always return a number. */
function toClaim(row: Record<string, unknown>): Claim {
  return ClaimSchema.parse({ ...row, amount: Number(row.amount) });
}

export async function listPolicyRules(grade: Grade): Promise<PolicyRule[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("policy_rules")
    .select(RULE_COLUMNS)
    .eq("grade", grade)
    .order("category");

  if (error) throw new Error(`policy_rules query failed: ${error.message}`);
  return (data ?? []).map((row) => PolicyRuleSchema.parse(row));
}

export async function getPolicyRule(category: string, grade: Grade): Promise<PolicyRule | null> {
  const { data, error } = await getSupabaseAdmin()
    .from("policy_rules")
    .select(RULE_COLUMNS)
    .eq("category", category)
    .eq("grade", grade)
    .maybeSingle();

  if (error) throw new Error(`policy_rules query failed: ${error.message}`);
  return data ? PolicyRuleSchema.parse(data) : null;
}

export async function listClaims(employeeId: string): Promise<Claim[]> {
  const { data, error } = await getSupabaseAdmin()
    .from("claims")
    .select(CLAIM_COLUMNS)
    .eq("employee_id", employeeId)
    .order("created_at", { ascending: false })
    .order("id", { ascending: false });

  if (error) throw new Error(`claims query failed: ${error.message}`);
  return (data ?? []).map(toClaim);
}

export type NewClaimRow = Omit<Claim, "id" | "created_at">;

export async function insertClaim(row: NewClaimRow): Promise<Claim> {
  const { data, error } = await getSupabaseAdmin()
    .from("claims")
    .insert(row)
    .select(CLAIM_COLUMNS)
    .single();

  if (error) throw new Error(`claims insert failed: ${error.message}`);
  return toClaim(data);
}
