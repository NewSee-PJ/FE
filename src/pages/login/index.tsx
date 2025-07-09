import * as S from "./index.styles";
import Logo from "@assets/icons/common/logo.svg?react";
import KakaoLogo from "@assets/icons/login/kakaoLogo.svg?react";
import TopBar from "@/components/common/TopBar";
import { useModal } from "@hooks/useModal";
import LevelSelectModal from "@/components/common/Modal/LevelSelectModal";

export const Login = () => {
  const { openModal, closeModal } = useModal();

  const handleOpenModal = () => {
    openModal("custom", {
      children: () => <LevelSelectModal closeModal={closeModal} />,
    });
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
        <KaKaoLoginButton onClick={handleOpenModal} />
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
