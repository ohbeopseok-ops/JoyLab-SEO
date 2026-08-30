# Content OS V1.6 — Database Foundation

PR #1 establishes the Supabase/Postgres foundation for JoyLab Content OS V1.6.

## Files

- supabase/migrations/001_content_os_v16_foundation.sql
- supabase/seed/002_seed_content_registry.sql
- supabase/tests/001_foundation_smoke.sql

## Security

RLS is enabled on every V1.6 public table. PR #1 intentionally creates no public policies. Backend collectors must use a server-side Supabase secret/service credential. Never expose it to browser code.

## Apply order

1. Apply the foundation migration.
2. Apply the seed.
3. Run the smoke verification.

Expected result: 62 contents, 62 keywords, zero orphan keywords, RLS enabled on all ten V1.6 tables.

## Scope boundary

This PR does not activate or create a Supabase project, create NAVER/GSC collectors, store NAVER Blog Search rank data, or deploy the Vercel dashboard. Those remain separate PRs.
