import styled from "styled-components";

interface ContainerProps {
  variant: "blue" | "red" | "disabled";
}

export const Container = styled.button<ContainerProps>`
  background-color: ${({ variant, theme }) =>
    variant === "blue"
      ? theme.colors.bg.blue
      : variant === "red"
        ? theme.colors.bg.red
        : theme.colors.bg.elevated};
  color: ${({ variant, theme }) =>
    variant === "disabled"
      ? theme.colors.text.secondary
      : theme.colors.text.white};
  padding: 10px;
  border: 1px solid;
  border-color: ${({ variant, theme }) =>
    variant === "blue"
      ? theme.colors.border.blue
      : variant === "red"
        ? theme.colors.border.red
        : theme.colors.border.divider};
  border-radius: 8px;
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.fonts.Button1}
  box-sizing: border-box;
`;
