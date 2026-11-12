import { demoUser } from "@/lib/demo-user";

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function UserBadge() {
  const { name, employeeId, grade } = demoUser;

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">
        Signed in as {name}, {employeeId}, grade {grade}
      </span>
      <div className="hidden text-right leading-tight sm:block" aria-hidden="true">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted">
          {employeeId} · Grade {grade}
        </div>
      </div>
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent"
      >
        {initials(name)}
      </span>
    </div>
  );
}
