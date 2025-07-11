import { create } from "zustand";
import type { NewsListItemType } from "@/types/newsList";

type BookmarkStore = {
  bookmarkIds: number[];
  bookmarkItems: NewsListItemType[];
  toggleBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
  setBookmarks: (items: NewsListItemType[]) => void;
  reset: () => void;
};

export const useBookmarkStore = create<BookmarkStore>((set, get) => ({
  bookmarkIds: [],
  bookmarkItems: [],
  toggleBookmark: (id: number) => {
    const { bookmarkIds } = get();
    const exists = bookmarkIds.includes(id);
    set({
      bookmarkIds: exists
        ? bookmarkIds.filter((i) => i !== id)
        : [...bookmarkIds, id],
    });
  },
  isBookmarked: (id) => get().bookmarkIds.includes(id),
  setBookmarks: (items) => {
    set({
      bookmarkIds: items.map((item) => item.newsId),
      bookmarkItems: items,
    });
  },
  reset: () => set({ bookmarkIds: [], bookmarkItems: [] }),
}));
