import { KnowledgeBridgeV22 } from "@/components/knowledge/KnowledgeBridgeV22";

export function AiEconomicsKnowledgeBridge() {
  return (
    <KnowledgeBridgeV22
      contentId="RES-AI-001"
      evidence={[
        { id:"EVID-CAPEX-001", title:"기업 CAPEX 공시·가이던스", sourceType:"primary" },
        { id:"EVID-REV-001", title:"AI 관련 매출·수주 데이터", sourceType:"primary" },
        { id:"EVID-MARGIN-001", title:"마진·현금흐름·ROIC 데이터", sourceType:"primary" }
      ]}
      framework={{
        id:"FRAME-CAPEX-001",
        name:"CAPEX → Revenue → EPS → ROIC → Price",
        summary:"AI 인프라 투자가 실제 매출과 이익, 자본효율성, 최종 밸류에이션으로 연결되는지를 단계적으로 검증합니다.",
        href:"/research/frameworks/capex-revenue-eps-roic-price/"
      }}
      related={[
        { id:"RES-HBM-001", eyebrow:"SEMICONDUCTOR", title:"HBM 공급과 수익성", href:"/research/semiconductor/hbm-profitability/", relation:"AI CAPEX의 핵심 병목을 메모리 관점에서 확인" },
        { id:"RES-POWER-001", eyebrow:"AI INFRASTRUCTURE", title:"AI 데이터센터 전력 인프라", href:"/research/ai-infrastructure/power-grid/", relation:"GPU 이후의 전력 병목과 CAPEX 확장성 연결" },
        { id:"HUB-AI-ECON", eyebrow:"HUB", title:"AI Economics", href:"/research/ai-economics/", relation:"AI 투자 경제성 전체 Research Cluster" }
      ]}
      next={{ label:"다음으로 이어가기", title:"HBM 공급과 수익성 분석", href:"/research/semiconductor/hbm-profitability/" }}
    />
  );
}
