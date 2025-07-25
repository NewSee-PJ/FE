import * as S from "./index.styles";
import { LevelTypeToKorean } from "@/utils/level";
import { useUserStore } from "@/stores/user";

interface LevelTagProps {
  showLabel?: boolean;
}

export const LevelTag = ({ showLabel = true }: LevelTagProps) => {
  const level = useUserStore((state) => state.level);

  return (
    <S.Container>
      {showLabel && <S.Text>내 레벨</S.Text>}
      <S.LevelBox level={level}>{LevelTypeToKorean[level]}</S.LevelBox>
    </S.Container>
  );
};
