import { useKakaoLogin } from "./hooks/useKakaoLogin";

export const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  useKakaoLogin(code);

  return <div>로그인 처리 중...</div>;
};
