# CPGE Score Maroc

Calculateur web responsive du score de sélection CPGE marocain, avec formule officielle, coefficients par filière et détail pédagogique du résultat.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/cpge-score-maroc run dev` — run the CPGE Score Maroc web app
- `pnpm --filter @workspace/cpge-score-maroc run test` — run calculation unit tests
- `pnpm --filter @workspace/cpge-score-maroc run typecheck` — typecheck the web app
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/cpge-score-maroc/src/data/calculator.ts` — source of truth for filières, baccalauréats admissibles, coefficients and calculation functions
- `artifacts/cpge-score-maroc/src/pages/Calculator.tsx` — guided calculator and result breakdown
- `artifacts/cpge-score-maroc/src/pages/Home.tsx` — landing page
- `artifacts/cpge-score-maroc/src/pages/HowItWorks.tsx` — formula and coefficient reference
- `artifacts/cpge-score-maroc/src/data/calculator.test.ts` — unit tests for N1, N2, N3 and final score

## Architecture decisions

- The calculator is intentionally browser-only; no account, payment, database or API is needed.
- Intermediate values keep full precision and are formatted only for display.
- Changing the filière clears the selected baccalauréat and qualifying subject notes to prevent stale values.

## Product

Users can calculate their MP, PSI, TSI, ECS or ECT score through a guided flow, review admissible baccalaureates and coefficients, validate every note range, and inspect the substituted official formula.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
