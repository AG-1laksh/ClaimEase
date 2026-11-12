import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "New Claim",
};

export default function NewClaimPage() {
  return (
    <section className="flex flex-1 flex-col">
      <PageHeader
        title="New claim"
        description="Describe what you spent in your own words. You can review and correct the details before submitting."
      />
      <Card className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
        <p className="text-sm text-muted">For example</p>
        <p className="max-w-md rounded-lg bg-accent-soft px-4 py-3 text-accent">
          “I spent ₹2,400 on a client dinner yesterday, submit it.”
        </p>
        <p className="text-sm text-muted">The chat assistant will appear here.</p>
      </Card>
    </section>
  );
}
