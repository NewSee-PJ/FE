import styled from "styled-components";

export const TagContainer = styled.div<{ $isActive: boolean }>`
  border-radius: 16px;
  padding: 8px 16px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.bg.blue : theme.colors.bg.elevated};
  white-space: nowrap;
  cursor: pointer;
`;

export const TagText = styled.p<{ $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Button2};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.text.white : theme.colors.text.disabled};
`;
