import Link from "next/link";

export default function BrandMark() {
  return (
    <Link href="/claims/new" className="flex items-center gap-2 rounded-md">
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 shrink-0">
        <rect width="32" height="32" rx="8" className="fill-accent" />
        <path
          d="M10 7h12v18l-3-2-3 2-3-2-3 2z"
          fill="none"
          strokeWidth="2"
          strokeLinejoin="round"
          className="stroke-accent-foreground"
        />
        <path
          d="M13 12h6M13 16h6"
          strokeWidth="2"
          strokeLinecap="round"
          className="stroke-accent-foreground"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight">ClaimEase</span>
    </Link>
  );
}
