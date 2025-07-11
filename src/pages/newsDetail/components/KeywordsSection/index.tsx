import * as S from "./index.styles";
import { useNewsStore } from "@/stores/news";
import WordsIcon from "@assets/icons/common/words.svg?react";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { WordCard } from "../index";

export const KeywordsSection = () => {
  const navigate = useNavigate();
  const news = useNewsStore((state) => state.news);
  const theme = useTheme();

  const handleGotoWords = () => {
    navigate("/words");
  };
  return (
    <S.Container>
      <S.TitleNInfoContainer>
        <S.TitleContainer>
          <S.Title>
            <WordsIcon fill={theme.colors.bg.green} />
            <S.TitleText>주요 키워드</S.TitleText>
          </S.Title>
          <S.GotoWordsButton onClick={handleGotoWords}>
            내 단어장 바로가기
          </S.GotoWordsButton>
        </S.TitleContainer>
        <S.InfoText>
          기사 원문에 포함된 주요 단어들에 대해 알아봅시다.
        </S.InfoText>
      </S.TitleNInfoContainer>
      <S.WordsContainer>
        {news?.keywords.map((keyword, index) => (
          <WordCard key={index} keyword={keyword} />
        ))}
      </S.WordsContainer>
    </S.Container>
  );
};
