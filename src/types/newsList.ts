import type { NewsCategoryType } from "./category";

export type NewsListItemType = {
  newsId: number;
  title: string;
  category: NewsCategoryType;
  content: string;
  source: string;
  time: Date;
  imageUrl: string;
  isBookmarked?: boolean;
};
