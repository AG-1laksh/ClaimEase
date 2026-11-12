# ClaimEase

PS5: Expense Claim Assistant. An employee describes a work expense in plain language; the app extracts the details, proposes a policy category, applies the grade's policy rule on the server, and saves the claim (flagged with a reason when it exceeds the category's `max_amount`; blocked when the expense is older than 60 days).

Demo user: **E001, Meera Nair, grade L2**.

## Stack

- Next.js 16 (App Router, Cache Components) + React 19 + TypeScript
- Tailwind CSS 4
- Supabase (database), Gemini (extraction), Vercel (hosting)

> This Next.js version differs from older tutorials. Check `node_modules/next/dist/docs/` before using an API you haven't used in this repo.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values locally; never commit .env.local
npm run dev
```

Open http://localhost:3000. It redirects to **New Claim**.

## Environment variables

See `.env.example`. Only `NEXT_PUBLIC_*` variables reach the browser, and they are fixed at build time. `SUPABASE_SERVICE_ROLE_KEY` and `GEMINI_API_KEY` are server-only and must only be read in server code (route handlers / server-only modules).

On Vercel, set the same variables under Project → Settings → Environment Variables.

## Project layout and ownership

| Path | Owner | Purpose |
|---|---|---|
| `app/claims/new/` | Member 1 | New Claim chat page |
| `app/claims/` | Member 1 | My Claims page |
| `components/` | Member 1 | Shared UI (nav, badges, cards) |
| `lib/api-client.ts`, `lib/mocks/` | Member 1 | Frontend calls to the backend, plus labeled example data |
| `app/api/` | Member 2 | Route handlers (claims, extraction proxy, categories) |
| `lib/supabase/` | Member 2 | Supabase clients (server-only) |
| `supabase/migrations/` | Member 2 | PS5 schema: `employees`, `policy_rules`, `claims` |
| `lib/ai/` | Member 3 | Gemini extraction and conversation (server-only) |
| `lib/policy/` | Member 4 | Deterministic policy checks |
| `app/finance/` | Member 4 | Finance Review (stretch) |
| `types/api.ts`, `docs/api-contract.md` | Members 1 + 2 | Agreed request/response formats |

Folders other than the pages are created by their owners when they start.

## Workflow

- Branch per feature (`feat/<area>`), pull request into `main`, at least one teammate reviews.
- The backend makes every policy decision; the frontend only displays what the backend returns.
