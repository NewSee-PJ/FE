import { sendRequest } from "../request";
import { userInstance } from "../instance";
import type { NewsListItemType } from "@/types/newsList";

export const getBookmarkList = async (): Promise<NewsListItemType[]> => {
  const response = await sendRequest<NewsListItemType[]>(
    userInstance,
    "GET",
    "/saved-news"
  );

  if (!response.success) {
    throw new Error(response.message || "뉴스 저장 실패");
  }
  return response.result;
};
