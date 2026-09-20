# JOYLAB SEO GOLD GATE V1

Version: 1.0
Effective Date: 2026-09-21

## Completion Definition

Published != Done

Done requires:
- Production crawler proof
- D0 baseline
- D+7 index check
- D+14 measurement
- D+30 decision

## Status

- PASS: verified and passed
- FAIL: verified and failed
- VERIFY: not yet verified
- N/A: not applicable with reason

## BLOCKER — any FAIL prevents GOLD

G01 Indexability
- no meta noindex
- no X-Robots-Tag noindex
- robots does not block critical public paths

G02 SSR / Crawler-visible Content
- H1 and primary content exist without JavaScript execution

G03 Canonical
- canonical exists and resolves to the intended representative URL

G04 Sitemap Coverage
- production canonical URLs are included
- noindex/404/redirect URLs are excluded

G05 HTTP Integrity
- valid pages return 200
- nonexistent pages return real 404
- redirect chains are minimized

G06 Structured Data Integrity
- JSON-LD parses
- structured data matches visible content
- no fabricated FAQ/author/rating/date data

## CORE

G07 Unique Metadata
- unique title, description, OG metadata

G08 Intent = URL = H1
- the primary search intent aligns with URL and H1

G09 Direct Answer First
- the opening section contains the answer/conclusion, not only setup

G10 Structured Answer
- clean H2/H3 hierarchy
- tables/lists/FAQ when useful
- quotable standalone paragraphs

G11 Claim → Evidence
- material factual claims have evidence
- fact and interpretation are separated

G12 Source Quality
Priority:
1. official/primary source
2. high-quality secondary source
3. community/experience source with context

G13 Date Context
- Published At
- Updated At
- data/reference date for time-sensitive claims

G14 Citation-ready Block
- independently understandable paragraph with subject, evidence/date, and conclusion

G15 Brand Entity Consistency
- JOYLAB / JoyLab naming is consistent
- core definition: "생각을 분석하고, 분석을 실행으로."

G16 Entity Connection
Primary entities:
- Investment & Economics
- AI & Productivity
- Growth & Leadership
- Books

G17 Naver Technical Readiness
- Search Advisor status
- sitemap
- mobile readability
- crawl/meta/canonical consistency

G18 Naver Citation Readiness
- direct answer
- source/date
- original analysis/data
- citation-ready paragraph structure

G19 Knowledge Graph Connection
Each detail page:
- Parent Hub >= 1
- Related Nodes >= 2
- Next Action >= 1

G20 Measurement Contract
Required:
- content_id / url / page_type / parent_hub
- published_at / updated_at
- baseline_at
- google_indexed / naver_indexed
- impressions / clicks / ctr / avg_position
- target_query_match_rate
- AI citation observed
- D+7 / D+14 / D+30 dates
- GOLD/HOLD/RED status

## Final Status Logic

GOLD:
- G01~G06 all PASS
- CORE all PASS or justified N/A
- G20 PASS

HOLD:
- BLOCKER pass, but CORE contains VERIFY/FAIL

RED:
- any BLOCKER FAIL

## Primary Source Types

TYPE A — DATA PRIMARY SOURCE
- direct research
- direct calculation
- proprietary dataset
- experiment
- direct measurement

TYPE B — ANALYSIS PRIMARY SOURCE
- JoyLab Framework
- JoyLab Scorecard
- JoyLab Case Study
- JoyLab Playbook
- JoyLab Interpretation
