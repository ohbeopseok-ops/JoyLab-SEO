import { KnowledgeBridgeV22 } from "@/components/knowledge/KnowledgeBridgeV22";

export function OldManAndSeaKnowledgeBridge() {
  return (
    <KnowledgeBridgeV22
      contentId="BOOK-EP01"
      evidence={[
        {
          id: "BOOK-SOURCE-HEMINGWAY-001",
          title: "『노인과 바다』 원전",
          sourceType: "primary",
          note: "작품 해석의 출발점이 되는 1차 텍스트",
        },
      ]}
      framework={{
        id: "FRAME-GRIT-001",
        name: "GRIT Leadership Framework",
        summary: "성과가 흔들릴 때 결과만 보지 않고 지속성·회복력·개입 기준을 구조화하는 JoyLab 리더십 프레임워크",
        href: "/growth-leadership/frameworks/grit-leadership/",
      }}
      related={[
        { id:"FRAME-GRIT-001", eyebrow:"FRAMEWORK", title:"GRIT Leadership Framework", href:"/growth-leadership/frameworks/grit-leadership/", relation:"이 글의 해석을 실행 기준으로 구조화" },
        { id:"LEAD-PLAY-001", eyebrow:"PLAYBOOK", title:"성과부진 상담사 Coaching Playbook", href:"/growth-leadership/playbook/low-performance-coaching/", relation:"리더의 실제 개입 절차로 확장" },
        { id:"CASE-COACH-001", eyebrow:"CASE", title:"성과 회복 코칭 적용 사례", href:"/growth-leadership/cases/performance-recovery-coaching/", relation:"현장 적용과 측정으로 연결" }
      ]}
      next={{ label:"다음으로 이어가기", title:"성과부진 상담사 Coaching Playbook", href:"/growth-leadership/playbook/low-performance-coaching/" }}
    />
  );
}
