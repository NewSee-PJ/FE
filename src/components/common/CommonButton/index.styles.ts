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
      ? theme.colors.text.primary
      : theme.colors.text.white};
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  ${({ theme }) => theme.fonts.Button1}
`;
