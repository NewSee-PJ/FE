import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  padding-bottom: 40px;
  gap: 16px;
  p {
    text-align: center;
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const RouteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bg.blueBg};
  color: ${({ theme }) => theme.colors.text.blue};
  ${({ theme }) => theme.fonts.Button1}
  border-radius: 50px;
  padding: 8px 16px;
`;
