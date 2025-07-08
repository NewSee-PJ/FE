export type NewsDetailType = {
  newsId: number;
  title: string;
  category: CategoryType;
  source: string;
  time: Date;
  url: string;
  userLevel: LevelType;
  originalContent: string;
  transformedContent: string;
  summary: string;
  keywords: KeywordType[];
};

export type KeywordType = {
  term: string;
  description: string;
  source: string;
};

export type CategoryType = "과학" | "경제" | "사회" | "연예" | "기타";

export type LevelType = "상" | "중" | "하";
