import { LevelType } from "@/types/level";

export const LevelTypeToKorean: Record<LevelType, string> = {
  [LevelType.HIGH]: "상",
  [LevelType.MEDIUM]: "중",
  [LevelType.LOW]: "하",
};

export const KoreanToLevelType: Record<string, LevelType> = {
  상: LevelType.HIGH,
  중: LevelType.MEDIUM,
  하: LevelType.LOW,
};

export const LevelTypeToAgeTag: Record<LevelType, string> = {
  [LevelType.HIGH]: "18세 이상",
  [LevelType.MEDIUM]: "14 ~ 18세",
  [LevelType.LOW]: "14세 미만",
};

export const LevelTypeToDescription: Record<LevelType, string> = {
  [LevelType.HIGH]: "원문에 가까운 형태, 어려운 단어만 설명",
  [LevelType.MEDIUM]: "간결하고 이해하기 쉬운 문장으로 구성",
  [LevelType.LOW]: "매우 쉽고 풀어서 설명하는 문장",
};

// ✅ 메인 색상 키 (예: theme.colors.primary.high)
export const LevelTypeToMainColorKey: Record<LevelType, string> = {
  [LevelType.HIGH]: "green",
  [LevelType.MEDIUM]: "yellow",
  [LevelType.LOW]: "orange",
};

// ✅ 배경색 키 (예: theme.colors.bg.highBg)
export const LevelTypeToBgColorKey: Record<LevelType, string> = {
  [LevelType.HIGH]: "greenBg",
  [LevelType.MEDIUM]: "yellowBg",
  [LevelType.LOW]: "orangeBg",
};
