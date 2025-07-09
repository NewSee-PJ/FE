import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLoginCallbackAPI } from "@/api/user/user";
import { useUserStore } from "@/stores/user";
import { useModal } from "@/hooks/useModal";
import LevelSelectModal from "@/components/common/Modal/LevelSelectModal";

export const KakaoLogin = () => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (!code) {
      console.error("인가 코드 없음");
      return;
    }

    const handleLogin = async () => {
      try {
        const userInfo = await kakaoLoginCallbackAPI(code);
        useUserStore.getState().login(userInfo);
        localStorage.setItem("accessToken", userInfo.accessToken);

        navigate("/home");

        openModal("custom", {
          children: () => <LevelSelectModal closeModal={closeModal} />,
        });
      } catch (error) {
        console.error("로그인 실패:", error);
      }
    };

    handleLogin();
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
};
