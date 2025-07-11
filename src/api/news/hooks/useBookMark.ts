import { useMutation } from "@tanstack/react-query";
import { saveNewsBookMark } from "../news";
import { useBookmarkStore } from "@/stores/bookmark";

export const useNewsBookmark = () => {
  const { toggleBookmark: toggleStoreBookmark } = useBookmarkStore();

  const { mutate: toggleBookmark, isPending } = useMutation({
    mutationFn: saveNewsBookMark,
    onSuccess: (result) => {
      // 북마크 저장 성공 시 스토어에 반영
      toggleStoreBookmark(result.newsId);
    },
    onError: (error) => {
      console.error("북마크 저장 실패", error);
    },
  });

  return {
    toggleBookmark,
    isPending,
  };
};
