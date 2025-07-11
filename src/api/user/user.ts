import { sendRequest } from "../request";
import { userInstance } from "../instance";
import { LevelType } from "@/types/level";
import axios from "axios";

interface KakaoLoginResult {
  provider: string;
  email: string;
  name: string;
  profileImage: string;
  accessToken: string;
  refreshToken: string;
  level: LevelType;
  new: boolean;
}

export interface ProfileResult {
  userId: number;
  name: string;
  profileImage: string;
  level: LevelType;
  joinDate: Date;
}

export const getKakaoAccessToken = async (code: string) => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const response = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    new URLSearchParams({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data.access_token;
};

export const loginWithKakaoToken = async (accessToken: string) => {
  const response = await sendRequest<KakaoLoginResult>(
    userInstance,
    "POST",
    "/kakao",
    { accessToken: accessToken }
  );

  if (!response.success) {
    throw new Error(response.message || "카카오 로그인 실패");
  }
  return response.result;
};

export const fetchMyProfile = async () => {
  try {
    const response = await sendRequest<ProfileResult>(
      userInstance,
      "GET",
      "/profile"
    );

    if (!response.success) {
      throw new Error(response.message || "프로필 조회 실패");
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

    throw new Error("프로필 조회 실패");
  }
};
