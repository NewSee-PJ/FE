import styled from "styled-components";
import { LevelType } from "@/types/level";
import { LevelTypeToMainColorKey, LevelTypeToBgColorKey } from "@utils/level";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.text.disabled};
`;

export const LevelBox = styled.div<{ level: LevelType }>`
  display: flex;
  height: 24px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  ${({ theme }) => theme.fonts.Button2}
  color: ${({ theme, level }) =>
    theme.colors.text[
      LevelTypeToMainColorKey[level] as keyof typeof theme.colors.text
    ]};
  background-color: ${({ theme, level }) =>
    theme.colors.bg[
      LevelTypeToBgColorKey[level] as keyof typeof theme.colors.bg
    ]};
`;
