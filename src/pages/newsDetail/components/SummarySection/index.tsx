import * as S from "./index.styles";
import SummaryIcon from "@assets/icons/news/summary.svg?react";
import { useTheme } from "styled-components";
import { useNewsStore } from "@/stores/news";

export const SummarySection = () => {
  const theme = useTheme();
  const news = useNewsStore((state) => state.news);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>
          <SummaryIcon fill={theme.colors.bg.yellow} width={21} height={21} />
          <S.TitleText>요약</S.TitleText>
        </S.Title>
      </S.TitleContainer>
      <S.SummaryContainer>
        <S.SummaryText>{news?.summary}</S.SummaryText>
      </S.SummaryContainer>
    </S.Container>
  );
};
