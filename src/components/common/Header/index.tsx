import * as S from "./index.styles";
import HeaderLogo from "@assets/icons/common/logoText.svg?react";
import { useUserStore } from "@stores/user";
import profileDefaultImage from "@assets/images/profileImage.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { accessToken: token, name, profileImage } = useUserStore();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <S.Container>
      <HeaderLogo width={109} height={33} onClick={handleLogoClick} />
      {token ? (
        <S.UserInfo>
          <S.UserName>{name}</S.UserName>
          <img
            src={profileImage ? profileImage : profileDefaultImage}
            width={32}
            height={32}
          />
        </S.UserInfo>
      ) : (
        <S.ButtonContainer onClick={handleLoginClick}>로그인</S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default Header;
