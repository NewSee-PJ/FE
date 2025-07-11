import * as S from "./index.styles";
import RightArrowIcon from "@assets/icons/mypage/rightArrow.svg?react";

interface MenuProps {
  title: string;
  onClick: () => void;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Menu = ({ title, onClick, Icon }: MenuProps) => {
  return (
    <S.MenuContainer onClick={onClick}>
      <S.MenuHead>
        <Icon width={20} height={20} />
        <S.MenuText>{title}</S.MenuText>
      </S.MenuHead>
      <RightArrowIcon width={10} height={16} />
    </S.MenuContainer>
  );
};
