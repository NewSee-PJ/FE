import { create } from "zustand";
import type { NewsListItemType } from "@/types/newsList";
import { useBookmarkStore } from "./bookmark";

interface NewsListState {
  newsList: NewsListItemType[];
  setNewsList: (items: NewsListItemType[]) => void;
  clearNewsList: () => void;
}

export const useNewsListStore = create<NewsListState>((set) => ({
  newsList: [],
  setNewsList: (items) => {
    const bookmarkIds = items
      .filter((item) => item.isBookmarked)
      .map((item) => item.newsId);

    useBookmarkStore.getState().setBookmarks(bookmarkIds);
    set({ newsList: items });
  },

  clearNewsList: () => {
    set({ newsList: [] });
    useBookmarkStore.getState().reset(); // 북마크도 같이 초기화
  },
}));
