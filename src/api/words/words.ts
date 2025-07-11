import { sendRequest } from "../request";
import { wordsInstance } from "../instance";
import type { WordType } from "@/types/word";

interface WordsResult {
  totalCount: number;
  words: WordType[];
}

interface DeleteWordResult {
  deletedSavedWordId: number;
}

export const getMyWords = async (): Promise<WordsResult> => {
  try {
    const response = await sendRequest<WordsResult>(wordsInstance, "GET", "");

    if (!response.success) {
      throw new Error(response.message || "단어장 불러오기 실패");
    }

    return response.result;
  } catch (error: any) {
    const status = error?.response?.status;

    if (status === 401 || status === 403) {
      // 토큰이 유효하지 않거나 로그인이 안되어 있을 시 로그인 페이지로 강제 이동
      if (typeof window !== "undefined") {
        window.location.replace("/login");
      }
      throw new Error(`${status} Redirected to login`);
    }

    throw new Error("단어장 요청 실패");
  }
};

export const postAddWord = async (wordId: number) => {
  try {
    const response = await sendRequest<WordType>(
      wordsInstance,
      "POST",
      `/${wordId}`
    );

    if (!response.success) {
      throw new Error(response.message || "단어장 저장 실패");
    }

    return response.result;
  } catch (error: any) {
    const status = error?.response?.status;

    if (status === 401 || status === 403) {
      // 토큰이 유효하지 않거나 로그인이 안되어 있을 시 로그인 페이지로 강제 이동
      if (typeof window !== "undefined") {
        window.location.replace("/login");
      }
      throw new Error(`${status} Redirected to login`);
    }

    throw new Error("단어 추가 실패");
  }
};

export const deleteWord = async (savedWordId: number) => {
  try {
    const response = await sendRequest<DeleteWordResult>(
      wordsInstance,
      "DELETE",
      `/${savedWordId}`
    );

    if (!response.success) {
      throw new Error(response.message || "단어장 저장 실패");
    }

    return response.result;
  } catch (error: any) {
    const status = error?.response?.status;

    if (status === 401 || status === 403) {
      // 토큰이 유효하지 않거나 로그인이 안되어 있을 시 로그인 페이지로 강제 이동
      if (typeof window !== "undefined") {
        window.location.replace("/login");
      }
      throw new Error(`${status} Redirected to login`);
    }

    throw new Error("단어 삭제 실패");
  }
};
