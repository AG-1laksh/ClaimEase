import type { Metadata } from "next";
import Link from "next/link";
import { buttonClasses } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import EmptyState from "@/components/ui/EmptyState";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "My Claims",
};

export default function MyClaimsPage() {
  return (
    <section className="flex flex-col">
      <PageHeader
        title="My claims"
        description="Track the status of everything you have submitted."
        actions={
          <Link href="/claims/new" className={buttonClasses()}>
            New claim
          </Link>
        }
      />
      <Card>
        <EmptyState
          icon={
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
              <path d="M9 8h6M9 12h6" />
            </svg>
          }
          title="Claims list coming soon"
          description="Your claims will show here once this page is connected to the backend."
        />
      </Card>
    </section>
  );
}
