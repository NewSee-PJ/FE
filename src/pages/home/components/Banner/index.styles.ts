import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: ${({ theme }) => theme.gradients.blue};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head1};
  color: ${({ theme }) => theme.colors.text.white};
`;

export const Content = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.text.white};
  text-align: center;
`;
