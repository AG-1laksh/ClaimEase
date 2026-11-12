import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Claim · ClaimEase",
};

export default function NewClaimPage() {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">New Claim</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Describe your expense in plain language. The chat assistant will be built here.
      </p>
    </section>
  );
}
