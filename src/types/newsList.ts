import type { CategoryType } from "./newsDetail";
export type NewsListType = {
  newsList: NewsListItemType[];
};

export type NewsListItemType = {
  newsId: number;
  title: string;
  category: CategoryType;
  content: string;
  source: string;
  time: Date;
  url: string;
};
