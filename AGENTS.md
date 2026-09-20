# AGENTS.md

## Mission

Maintain JoyLab-SEO as a reproducible, documented, testable search and knowledge-graph workspace.

## Operating Rules

1. Inspect before editing.
2. Preserve existing behavior unless the task explicitly changes it.
3. Prefer small, reviewable commits.
4. Keep documentation synchronized with code and workflow changes.
5. Never claim a GitHub save succeeded until the written file is fetched again and verified.
6. Do not invent project files, credentials, metrics, crawl results, index status, or test results.
7. Do not commit secrets, tokens, .env files, local credentials, generated caches, or large build artifacts.
8. Production evidence not actually verified must be marked VERIFY, never PASS.
9. Any SEO GOLD BLOCKER failure prevents GOLD.
10. Published is not Done: completion requires crawler proof, baseline, and D+14 measurement contract.

## JoyLab SEO GOLD Workflow

Content
→ Knowledge Graph
→ KnowledgeBridge
→ SEO GOLD GATE
→ Deploy
→ Production Crawler Proof
→ D0 Baseline
→ D+7 Index Check
→ D+14 Measurement
→ D+30 Decision
→ GOLD CASE

## Knowledge Graph Rule

Every public detail page should have:
- Parent Hub >= 1
- Related Nodes >= 2
- Next Action >= 1
- Evidence >= 1 when factual claims are material

## Verification Hierarchy

1. automated tests
2. build/typecheck/lint
3. executable smoke test
4. production crawler proof
5. exact file re-fetch/content verification

Do not report PASS for a check that was not actually run.
