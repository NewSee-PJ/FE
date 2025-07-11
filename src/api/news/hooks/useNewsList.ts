import { useQuery } from "@tanstack/react-query";
import { getNewsList } from "../news";
import { useNewsListStore } from "@/stores/newsList";
import type { NewsListItemType } from "@/types/newsList";

export const useNewsList = () => {
  const setNewsList = useNewsListStore((state) => state.setNewsList);

  return useQuery<NewsListItemType[], Error>({
    queryKey: ["newsList"],
    queryFn: getNewsList,
    onSuccess: setNewsList,

    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnMount: false,
    retry: 1,
  });
};
