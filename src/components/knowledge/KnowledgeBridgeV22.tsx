import type { KnowledgeBridgeProps } from "./knowledge-bridge.types";

function cx(...values: Array<string | undefined | false>) {
  return values.filter(Boolean).join(" ");
}

export function KnowledgeBridgeV22({
  contentId,
  evidence = [],
  framework,
  related,
  next,
  className,
}: KnowledgeBridgeProps) {
  return (
    <section
      aria-labelledby={`${contentId}-kb-title`}
      data-content-id={contentId}
      className={cx("border-t border-slate-200 bg-[#F8FAFC] py-14 md:py-20", className)}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-9 max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#1677FF]">
            JOYLAB · KNOWLEDGE GRAPH
          </p>
          <h2
            id={`${contentId}-kb-title`}
            className="mt-3 text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] text-[#0B1F4D] md:text-[36px]"
          >
            읽고 끝내지 않고,
            <br className="hidden sm:block" /> 다음 생각으로 연결합니다.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600 md:text-base">
            근거에서 해석으로, 해석에서 실행으로 이어지는 JoyLab의 지식 연결 구조입니다.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {evidence.length > 0 && (
            <section className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm md:p-6 lg:col-span-5">
              <p className="text-[11px] font-bold tracking-[0.18em] text-slate-400">EVIDENCE</p>
              <h3 className="mt-2 text-lg font-bold text-[#0B1F4D]">이 판단의 근거</h3>
              <ul className="mt-5 divide-y divide-slate-100">
                {evidence.slice(0, 3).map((item, index) => (
                  <li key={item.id ?? `${item.title}-${index}`} className="py-4 first:pt-0 last:pb-0">
                    <div className="mb-1 flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-400">
                      <span>{item.sourceType}</span>
                      {item.date && <span>· {item.date}</span>}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="block text-[15px] font-semibold leading-6 text-slate-900 hover:text-[#1677FF]">
                        {item.title}
                      </a>
                    ) : (
                      <p className="text-[15px] font-semibold leading-6 text-slate-900">{item.title}</p>
                    )}
                    {item.note && <p className="mt-1.5 text-sm leading-6 text-slate-500">{item.note}</p>}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {framework && (
            <section className="relative overflow-hidden rounded-[22px] bg-[#0B1F4D] p-6 text-white md:p-7 lg:col-span-7">
              <p className="relative text-[11px] font-bold tracking-[0.18em] text-blue-300">FRAMEWORK</p>
              <h3 className="relative mt-2 text-xl font-bold">JoyLab이 구조화한 방법</h3>
              <a href={framework.href} className="relative mt-6 block rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]">
                <strong className="text-lg">{framework.name}</strong>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{framework.summary}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-blue-300">프레임워크 보기 →</span>
              </a>
            </section>
          )}
        </div>

        <section className="mt-10">
          <p className="text-[11px] font-bold tracking-[0.18em] text-slate-400">RELATED</p>
          <h3 className="mt-2 text-lg font-bold text-[#0B1F4D]">함께 보면 연결되는 글</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {related.slice(0, 3).map((item) => (
              <a key={item.id} href={item.href} className="group rounded-[18px] border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
                {item.eyebrow && <span className="text-[10px] font-bold tracking-[0.14em] text-[#1677FF]">{item.eyebrow}</span>}
                <strong className="mt-2 block text-[15px] leading-6 text-slate-900">{item.title}</strong>
                {item.relation && <p className="mt-3 text-xs leading-5 text-slate-500">{item.relation}</p>}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-[22px] border border-blue-100 bg-white p-5 md:flex md:items-center md:justify-between md:gap-8 md:p-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#1677FF]">NEXT</p>
            <p className="mt-2 text-sm text-slate-500">{next.label}</p>
          </div>
          <a href={next.href} className="mt-4 flex w-full items-center justify-between rounded-2xl bg-[#0B1F4D] px-5 py-4 text-sm font-bold text-white md:mt-0 md:w-auto md:min-w-[340px]">
            <span>{next.title}</span><span aria-hidden="true">→</span>
          </a>
        </section>
      </div>
    </section>
  );
}
