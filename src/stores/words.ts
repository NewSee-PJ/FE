import { create } from "zustand";
import type { WordType } from "@/types/word";

interface WordsState {
  words: WordType[];
  wordCount: number;
  setWords: (wordList: WordType[], count?: number) => void;
  addWord: (word: WordType) => void;
  removeWord: (savedWordId: number) => void;
  clearWords: () => void;
}

export const useWordsStore = create<WordsState>((set, get) => ({
  words: [],
  wordCount: 0,
  setWords: (wordList: WordType[], count?: number) => {
    set({ words: wordList, wordCount: count ?? wordList.length });
  },
  addWord: (word: WordType) => {
    const { words, wordCount } = get();
    const isAlreadySaved = words.some((w) => w.wordId === word.wordId);
    if (!isAlreadySaved) {
      set({ words: [...words, word], wordCount: wordCount + 1 });
    }
  },

  removeWord: (savedWordId: number) => {
    const { words } = get();
    const newWords = words.filter((word) => word.savedWordId !== savedWordId);
    set({
      words: newWords,
      wordCount: newWords.length,
    });
  },

  clearWords: () => {
    set({ words: [], wordCount: 0 });
  },
}));
