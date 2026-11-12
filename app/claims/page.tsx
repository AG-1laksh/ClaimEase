import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Claims · ClaimEase",
};

export default function MyClaimsPage() {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold tracking-tight">My Claims</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Your submitted claims will be listed here.
      </p>
    </section>
  );
}
