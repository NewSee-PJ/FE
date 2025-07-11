import * as S from "./index.styles";

interface CategoryTagProps {
  isActive: boolean;
  tagTitle: string;
  onSelectTag: (s: string) => void;
}

export const CategoryTag = ({
  isActive,
  tagTitle,
  onSelectTag,
}: CategoryTagProps) => {
  return (
    <S.TagContainer onClick={() => onSelectTag(tagTitle)} $isActive={isActive}>
      <S.TagText $isActive={isActive}>{tagTitle}</S.TagText>
    </S.TagContainer>
  );
};
