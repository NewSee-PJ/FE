import { create } from "zustand";

type BookmarkStore = {
  bookmarks: number[];
  toggleBookmark: (id: number) => void;
  isBookmarked: (id: number) => boolean;
  setBookmarks: (ids: number[]) => void;
  reset: () => void;
};

export const useBookmarkStore = create<BookmarkStore>((set, get) => ({
  bookmarks: [],
  toggleBookmark: (id) => {
    const prev = get().bookmarks;
    const exists = prev.includes(id);
    const next = exists ? prev.filter((i) => i !== id) : [...prev, id];
    set({ bookmarks: next });
  },
  isBookmarked: (id) => get().bookmarks.includes(id),
  setBookmarks: (ids) => set({ bookmarks: ids }),
  reset: () => set({ bookmarks: [] }),
}));
