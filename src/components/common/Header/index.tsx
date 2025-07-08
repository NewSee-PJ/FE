import * as S from "./index.styles";
import { HeaderLogo } from "@/assets/icons/common";
import { useUserStore } from "@/stores/user";
import profileDefaultImage from "@assets/images/profileImage.png";

const Header = () => {
  const token = useUserStore((state) => state.accessToken);
  const name = useUserStore((state) => state.name);
  const profileImage = useUserStore((state) => state.profileImage);

  return (
    <S.Container>
      <HeaderLogo width={109} height={33} />
      {true ? (
        <S.UserInfo>
          <S.UserName>name</S.UserName>
          <img src={profileDefaultImage} width={32} height={32} />
        </S.UserInfo>
      ) : (
        <S.ButtonContainer>로그인</S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default Header;
