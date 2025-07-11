import type { NewsCategoryType } from "./category";

export type WordType = {
  savedWordId: number;
  wordId: number;
  term: string;
  description: string;
  category: NewsCategoryType;
  date: Date;
};
