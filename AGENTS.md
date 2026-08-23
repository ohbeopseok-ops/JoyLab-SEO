# AGENTS.md

## Mission

Maintain JoyLab-SEO as a reproducible, documented, testable SEO workspace.

## Operating Rules

1. Inspect before editing.
2. Preserve existing behavior unless the task explicitly changes it.
3. Prefer small, reviewable commits.
4. Keep documentation synchronized with code and workflow changes.
5. Never claim a GitHub save succeeded until the written file is fetched again and verified.
6. Do not invent project files, dependencies, credentials, metrics, or test results.
7. Do not commit secrets, API keys, tokens, `.env` files, local credentials, generated caches, or large build artifacts.

## JoyLab GitHub Save Standard

When the user says **"깃헙에 저장해줘"** and repository context is clear:

- identify the target repository and default/target branch;
- inspect files that may be overwritten;
- create or update the requested project files;
- update `README.md` when setup, architecture, usage, or project scope changes materially;
- update `AGENTS.md` when agent/workflow rules change materially;
- add/update tests when executable logic changes and verification is feasible;
- commit with a concise descriptive message;
- re-fetch changed files after writing;
- verify content and report the result.

## Completion Report

Always report:

- repository;
- branch;
- changed files;
- commit SHA(s);
- verification status;
- any unresolved issue that affects reproducibility.

## Verification Hierarchy

Use the strongest available check:

1. automated tests;
2. build/typecheck/lint;
3. executable smoke test;
4. exact file re-fetch/content verification.

Do not report PASS for a check that was not actually run.

## Suggested Repository Layout

```text
README.md
AGENTS.md
.gitignore
docs/
src/
tests/
scripts/
```

Create folders only when there is real content for them; do not add empty placeholder directories without a reason.
