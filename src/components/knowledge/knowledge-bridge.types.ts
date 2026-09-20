export type EvidenceItem = {
  id?: string;
  title: string;
  sourceType: "primary" | "secondary" | "joylab-data" | "joylab-analysis";
  date?: string;
  href?: string;
  note?: string;
};

export type FrameworkItem = {
  id: string;
  name: string;
  summary: string;
  href: string;
};

export type RelatedItem = {
  id: string;
  title: string;
  eyebrow?: string;
  href: string;
  relation?: string;
};

export type NextItem = {
  label: string;
  title: string;
  href: string;
};

export type KnowledgeBridgeProps = {
  contentId: string;
  evidence?: EvidenceItem[];
  framework?: FrameworkItem;
  related: RelatedItem[];
  next: NextItem;
  className?: string;
};
