import * as S from "./index.styles";
import type { KeywordType } from "@/types/newsDetail";

interface WordCardProps {
  keyword: KeywordType;
}

export const WordCard = ({ keyword }: WordCardProps) => {
  return (
    <S.Container>
      <S.WordContainer>
        <S.Term>{keyword.term}</S.Term>
        <S.Description>{keyword.description}</S.Description>
      </S.WordContainer>

      <AddButton wordId={keyword.wordId} />
    </S.Container>
  );
};

const AddButton = ({ wordId }: { wordId: number }) => {
  const handleAddWord = () => {
    console.log(wordId, ": 단어장에 추가 완료");
    // TODO: 단어장 추가 및 모달 처리
  };

  return <S.WordAddButton onClick={handleAddWord}>단어장 추가</S.WordAddButton>;
};
