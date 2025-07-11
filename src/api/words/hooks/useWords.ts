import { useQuery, useMutation } from "@tanstack/react-query";
import { getMyWords, postAddWord, deleteWord } from "../words";
import { useWordsStore } from "@/stores/words";

export const useMyWords = () => {
  const setWords = useWordsStore((state) => state.setWords);

  return useQuery({
    queryKey: ["myWords"],
    queryFn: async () => {
      const { words, totalCount } = await getMyWords();
      setWords(words, totalCount);
      return words;
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useAddWord = () => {
  const addWord = useWordsStore((state) => state.addWord);

  return useMutation({
    mutationFn: (wordId: number) => postAddWord(wordId),
    onSuccess: (newWord) => {
      addWord(newWord);
    },
  });
};

export const useDeleteWord = () => {
  const removeWord = useWordsStore((state) => state.removeWord);

  return useMutation({
    mutationFn: async (savedWordId: number) => {
      const res = await deleteWord(savedWordId);
      return res.deletedSavedWordId;
    },
    onSuccess: (deletedWordId) => {
      removeWord(deletedWordId);
    },
  });
};
