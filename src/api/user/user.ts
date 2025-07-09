import { sendRequest } from "../request";
import { userInstance } from "../instance";
import { LevelType } from "@/types/level";

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

export const kakaoLoginCallbackAPI = async (code: string) => {
  const response = await sendRequest<KakaoLoginResult>(
    userInstance,
    "GET",
    "/kakao",
    { kakaoAccessToken: code }
  );

  if (!response.success) {
    throw new Error(response.message || "카카오 로그인 실패");
  }
  return response.result;
};
