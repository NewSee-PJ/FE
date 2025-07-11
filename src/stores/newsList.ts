import { create } from "zustand";
import type { NewsListItemType } from "@/types/newsList";

interface NewsListState {
  newsList: NewsListItemType[];
  setNewsList: (items: NewsListItemType[]) => void;
  clearNewsList: () => void;
}

export const useNewsListStore = create<NewsListState>((set) => ({
  newsList: [],
  setNewsList: (items) => {
    set({ newsList: items });
  },

  clearNewsList: () => {
    set({ newsList: [] });
  },
}));
