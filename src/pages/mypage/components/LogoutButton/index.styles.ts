import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.fonts.Body1}
  color: ${({ theme }) => theme.colors.text.red};
  background-color: ${({ theme }) => theme.colors.bg.redBg};
  padding: 10px;
  border-radius: 8px;
`;
