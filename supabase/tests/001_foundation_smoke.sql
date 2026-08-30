-- PR #1 smoke verification
do $$
declare
  content_count integer;
  keyword_count integer;
  orphan_count integer;
  rls_missing integer;
begin
  select count(*) into content_count from public.contents;
  if content_count <> 62 then raise exception 'Expected 62 contents, got %', content_count; end if;

  select count(*) into keyword_count from public.keywords;
  if keyword_count <> 62 then raise exception 'Expected 62 keywords, got %', keyword_count; end if;

  select count(*) into orphan_count
  from public.keywords k left join public.contents c on c.content_id = k.content_id
  where c.content_id is null;
  if orphan_count <> 0 then raise exception 'Expected zero orphan keywords, got %', orphan_count; end if;

  select count(*) into rls_missing
  from pg_class
  where relnamespace = 'public'::regnamespace
    and relname in (
      'contents','keywords','naver_trend_snapshots','search_demand_features',
      'gsc_performance_snapshots','content_score_snapshots','performance_reviews',
      'executive_actions','winner_patterns','weight_certifications'
    )
    and not relrowsecurity;
  if rls_missing <> 0 then raise exception 'RLS missing on % table(s)', rls_missing; end if;
end $$;

select status, count(*) from public.contents group by status order by status;
select priority, count(*) from public.contents group by priority order by priority;
