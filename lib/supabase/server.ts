import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the service role key.
 *
 * The service role bypasses row level security, so this module must only be
 * imported from route handlers and other server code. The "server-only"
 * import makes the build fail if a client component imports it.
 */

let client: SupabaseClient | undefined;

function requireEnv(name: "NEXT_PUBLIC_SUPABASE_URL" | "SUPABASE_SERVICE_ROLE_KEY"): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable ${name}. See .env.example.`);
  }
  return value;
}

/** Returns the shared server client, creating it on first use. */
export function getSupabaseAdmin(): SupabaseClient {
  if (!client) {
    client = createClient(
      requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
      requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      },
    );
  }
  return client;
}
