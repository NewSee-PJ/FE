import * as S from "./index.styles";
import { ArrowIcon } from "@/assets/icons/common";
import { useTheme } from "styled-components";

interface TopBarProps {
  title?: string;
}

const TopBar = ({ title }: TopBarProps) => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.ArrowContainer>
        <ArrowIcon fill={theme.colors.text.primary} width={24} height={24} />
      </S.ArrowContainer>
      <S.TopBarTitle>{title}</S.TopBarTitle>
    </S.Container>
  );
};

export default TopBar;
