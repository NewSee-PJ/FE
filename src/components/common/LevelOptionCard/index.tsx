import {
  LevelTypeToKorean,
  LevelTypeToAgeTag,
  LevelTypeToDescription,
} from "@utils/level";
import { LevelType } from "@/types/level";
import * as S from "./index.styles";
import LowStarIcon from "@assets/icons/level/lowStar.svg?react";
import MediumStarIcon from "@assets/icons/level/mediumStar.svg?react";
import HighStarIcon from "@assets/icons/level/highStar.svg?react";
import CheckIcon from "@assets/icons/common/check.svg?react";

interface LevelOptionCardProps {
  level: LevelType;
  selected: boolean;
  onClick: (level: LevelType) => void;
}

const LevelOptionCard = ({
  level,
  selected,
  onClick,
}: LevelOptionCardProps) => {
  const renderLevelIcon = () => {
    switch (level) {
      case "LOW":
        return <LowStarIcon width={18} height={18} />;
      case "MEDIUM":
        return <MediumStarIcon width={18} height={18} />;
      case "HIGH":
        return <HighStarIcon width={18} height={18} />;
      default:
        return null;
    }
  };

  return (
    <S.CardContainer
      selected={selected}
      onClick={() => onClick(level)}
      level={level}
    >
      <S.Header>
        <S.TitleContainer>
          <S.IconWrapper>{renderLevelIcon()}</S.IconWrapper>
          <S.Title>{LevelTypeToKorean[level]}급</S.Title>
          <S.Tag selected={selected} level={level}>
            {LevelTypeToAgeTag[level]}
          </S.Tag>
        </S.TitleContainer>
        <S.Description>{LevelTypeToDescription[level]}</S.Description>
      </S.Header>

      {selected && (
        <S.CheckIconWrapper level={level}>
          <CheckIcon />
        </S.CheckIconWrapper>
      )}
    </S.CardContainer>
  );
};

export default LevelOptionCard;
