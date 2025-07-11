import styled from "styled-components";
import { LevelType } from "@/types/level";
import { LevelTypeToBgColorKey, LevelTypeToMainColorKey } from "@utils/level";

export const CardContainer = styled.div<{
  selected: boolean;
  level: LevelType;
}>`
  position: relative;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
  width: 100%;
  ${({ selected, level, theme }) =>
    selected
      ? `
    border: 1.5px solid ${theme.colors.bg[LevelTypeToMainColorKey[level] as keyof typeof theme.colors.bg]};
    background-color: ${theme.colors.bg[LevelTypeToBgColorKey[level] as keyof typeof theme.colors.bg]};
  `
      : `
    border: 1.5px solid ${theme.colors.border.divider};
    background-color: #fff;
  `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  ${({ theme }) => theme.fonts.Body2B};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Tag = styled.span<{ level: LevelType; selected: boolean }>`
  background-color: ${({ selected, level, theme }) =>
    selected
      ? theme.colors.bg[
          LevelTypeToMainColorKey[level] as keyof typeof theme.colors.bg
        ]
      : theme.colors.bg[
          LevelTypeToBgColorKey[level] as keyof typeof theme.colors.bg
        ]};

  color: ${({ selected, theme, level }) =>
    selected
      ? theme.colors.text.white
      : theme.colors.bg[
          LevelTypeToMainColorKey[level] as keyof typeof theme.colors.bg
        ]};

  padding: 4px 10px;
  ${({ theme }) => theme.fonts.Caption};
  border-radius: 4px;
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CheckIconWrapper = styled.div<{ level: LevelType }>`
  display: flex;
  align-items: center;
  svg {
    width: 18px;
    height: 18px;
    fill: ${({ level, theme }) =>
      theme.colors.bg[
        LevelTypeToMainColorKey[level] as keyof typeof theme.colors.bg
      ]};
  }
`;
