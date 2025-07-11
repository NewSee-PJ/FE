import * as S from "./index.styles";
import { useNewsStore } from "@/stores/news";
import NewsIcon from "@assets/icons/common/news.svg?react";
import { useTheme } from "styled-components";
export const NewsContentSection = () => {
  const theme = useTheme();
  const news = useNewsStore((state) => state.news);

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>
          <NewsIcon fill={theme.colors.bg.blue} width={21} height={21} />
          <S.TitleText>기사 내용 읽기</S.TitleText>
        </S.Title>
        <S.ReadButton>읽어주기</S.ReadButton>
      </S.TitleContainer>
      <S.ContentContainer>{news?.transformedContent}</S.ContentContainer>
    </S.Container>
  );
};
