import type { KnowledgeBridgeProps } from "./knowledge-bridge.types";

export function KnowledgeBridge({
  contentId,
  evidence = [],
  framework,
  related,
  next,
}: KnowledgeBridgeProps) {
  return (
    <section aria-labelledby={`${contentId}-knowledge-bridge-title`}>
      <h2 id={`${contentId}-knowledge-bridge-title`}>이 글을 다음 생각으로 연결합니다</h2>

      {evidence.length > 0 && (
        <section>
          <h3>Evidence</h3>
          <ul>
            {evidence.slice(0, 3).map((item, index) => (
              <li key={item.id ?? `${item.title}-${index}`}>
                {item.href ? <a href={item.href}>{item.title}</a> : item.title}
              </li>
            ))}
          </ul>
        </section>
      )}

      {framework && (
        <section>
          <h3>Framework</h3>
          <a href={framework.href}>
            <strong>{framework.name}</strong>
            <p>{framework.summary}</p>
          </a>
        </section>
      )}

      <section>
        <h3>Related</h3>
        {related.slice(0, 3).map((item) => (
          <a key={item.id} href={item.href}>
            <strong>{item.title}</strong>
          </a>
        ))}
      </section>

      <section>
        <span>{next.label}</span>
        <a href={next.href}>{next.title} →</a>
      </section>
    </section>
  );
}
