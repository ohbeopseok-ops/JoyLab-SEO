# JOYLAB SEO Measurement Manifest V1

## Principle

Measure the funnel in this order:

Index
→ Impression
→ Target Query Match
→ Click
→ CTR
→ Internal Navigation
→ AI Citation

Do not confuse zero with unknown.

## Required Fields

Identity:
- content_id
- url
- slug
- page_type
- parent_hub
- primary_entity
- primary_intent
- target_query_cluster

Dates:
- published_at
- updated_at
- baseline_at
- d7_check_at
- d14_measure_at
- d30_decision_at

Technical:
- google_indexed
- naver_indexed
- canonical_ok
- sitemap_included
- crawler_visible
- schema_valid

Performance:
- impressions
- clicks
- ctr
- avg_position
- target_query_match_rate

Knowledge Graph:
- internal_links_in
- internal_links_out
- related_nodes
- framework_node
- evidence_nodes

AI/GEO:
- ai_citation_observed
- ai_citation_engines
- citation_ready_block_present

Decision:
- gold_status
- decision
- owner
- notes

## D+14 Priority

1. Index Status
2. Impressions
3. Target Query Match Rate
4. Clicks
5. CTR
6. Internal Navigation
7. AI Citation
8. Average Position

## Target Query Match Rate

matching meaningful queries / all meaningful queries * 100

## D+30 Decision

- keep
- expand
- revise
- merge
- retire
- pending
