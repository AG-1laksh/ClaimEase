"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/claims/new", label: "New Claim" },
  { href: "/claims", label: "My Claims" },
];

export default function AppNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="flex gap-1">
      {links.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-zinc-600 hover:bg-black/[.05] dark:text-zinc-400 dark:hover:bg-white/[.08]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
