import { useQuery } from "@tanstack/react-query";
import { getNewsList } from "../news";
import { useNewsListStore } from "@/stores/newsList";
import type { NewsListItemType } from "@/types/newsList";

export const useNewsList = () => {
  const setNewsList = useNewsListStore((state) => state.setNewsList);

  return useQuery<NewsListItemType[], Error>({
    queryKey: ["newsList"],
    queryFn: async () => {
      const data = await getNewsList();
      setNewsList(data);
      return data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnMount: false,
    retry: 1,
  });
};
