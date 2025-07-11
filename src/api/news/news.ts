import { sendRequest } from "../request";
import { newsInstance } from "../instance";
import type { NewsListItemType } from "@/types/newsList";

interface BookMarkResult {
  userId: number;
  newsId: number;
}

export const saveNewsBookMark = async (newsId: number) => {
  const response = await sendRequest<BookMarkResult>(
    newsInstance,
    "POST",
    `/${newsId}`
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 저장 실패");
  }
  return response.result;
};

export const getNewsList = async () => {
  const response = await sendRequest<NewsListItemType[]>(
    newsInstance,
    "POST",
    ""
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 저장 실패");
  }
  return response.result;
};
