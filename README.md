# JoyLab-SEO

JoyLab-SEO is a GitHub-ready workspace for SEO research, content production, automation, and repeatable publishing workflows.

## Repository Goals

- Turn SEO ideas into reproducible workflows.
- Keep prompts, source files, code, tests, and documentation together.
- Make ChatGPT/Codex edits easy to review and verify.
- Prefer evidence-based changes over ad-hoc edits.

## Content OS V1.6

JoyLab Content OS V1.6 is being built as a data-driven content growth layer inside this repository.

The first implementation milestone is the Supabase/Postgres Database Foundation:

- 10 core tables for content, search demand, actual performance, scoring, reviews, executive actions, winner patterns, and weight certification.
- Row Level Security enabled on every V1.6 public table.
- An idempotent seed generated from the 62-row JoyLab Content Registry V1.5.
- PostgreSQL 17 CI that applies the migration and seed, runs smoke assertions, and re-runs the seed to verify idempotency.

See `docs/CONTENT_OS_V1.6_DATABASE.md`.

### V1.6 delivery sequence

1. Database Foundation + 62-row seed.
2. NAVER API HUB Search Demand Collector.
3. Search Demand feature engine.
4. Google Search Console Actual Performance collector.
5. Opportunity / ROI / Executive Queue.
6. Vercel Control Tower dashboard.

## Standard Structure

```text
JoyLab-SEO/
├─ README.md
├─ AGENTS.md
├─ .gitignore
├─ docs/
├─ src/
├─ tests/
├─ scripts/
└─ supabase/
```

## GitHub Save Workflow

When the user says **"깃헙에 저장해줘"** and the target repository is clear, use this workflow:

1. Inspect the target repository and current branch.
2. Create or update the requested files.
3. Include/update README and AGENTS when the project structure or operating rules materially change.
4. Add or update tests when executable logic changes and tests are feasible.
5. Commit with a descriptive message.
6. Re-fetch the saved files and verify the expected content.
7. Report repository, branch, changed files, commit SHA, and verification result.

If the target repository is ambiguous, resolve the destination before writing.

## Verification Standard

A save is considered complete only when:

- GitHub write succeeds.
- The saved file can be fetched again.
- The fetched content matches the intended change.

## Status

Initialized as a GitHub-ready JoyLab repository on 2026-08-23.
Content OS V1.6 Database Foundation is under active implementation.
