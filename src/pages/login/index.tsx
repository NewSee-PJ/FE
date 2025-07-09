import * as S from "./index.styles";
import Logo from "@assets/icons/common/logo.svg?react";
import KakaoLogo from "@assets/icons/login/kakaoLogo.svg?react";
import TopBar from "@/components/common/TopBar";

export const Login = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleRedirect = () => {
    window.location.replace(`${kakaoURL}`);
  };

  return (
    <>
      <TopBar />
      <S.Container>
        <S.ContentContainer>
          <S.LogoContainer>
            <Logo width={132} height={132} />
            <S.HeadLine>로그인</S.HeadLine>
          </S.LogoContainer>

          <S.Description>
            로그인 후 NewSee의 모든 기능을 이용해보세요!
          </S.Description>
        </S.ContentContainer>
        <KaKaoLoginButton onClick={handleRedirect} />
      </S.Container>
    </>
  );
};

const KaKaoLoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <S.LoginButton onClick={onClick}>
      <S.KakaoLogoContainer>
        <KakaoLogo width={28} height={28} />
      </S.KakaoLogoContainer>
      <S.LoginText>카카오 로그인</S.LoginText>
    </S.LoginButton>
  );
};
