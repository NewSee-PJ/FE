import { useBookmarkStore } from "@/stores/bookmark";
import BookMarkIcon from "@assets/icons/news/bookmark.svg?react";
import BookMarkFilledIcon from "@assets/icons/news/bookmarkFill.svg?react";

interface BookmarkButtonProps {
  newsId: number;
  onClick?: (e: React.MouseEvent) => void;
}

export const BookmarkButton = ({ newsId, onClick }: BookmarkButtonProps) => {
  const toggleBookmark = useBookmarkStore((state) => state.toggleBookmark);
  const bookmarks = useBookmarkStore((state) => state.bookmarks);
  const isBookmarked = bookmarks.includes(newsId);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(newsId);
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} aria-label="북마크 토글">
      {isBookmarked ? (
        <BookMarkFilledIcon width={18} height={18} />
      ) : (
        <BookMarkIcon width={18} height={18} />
      )}
    </button>
  );
};
