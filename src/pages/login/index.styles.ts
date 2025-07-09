import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  flex: 1;
  margin-top: 150px;
`;

export const HeadLine = styled.h1`
  ${({ theme }) => theme.fonts.Head1};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: center;
`;

export const LoginButton = styled.div`
  background-color: #fae100;
  border-radius: 8px;
  width: 100%;
  position: relative;
  padding: 12px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LoginText = styled.p`
  color: #371d1e;
  ${({ theme }) => theme.fonts.Body1}
`;

export const KakaoLogoContainer = styled.div`
  position: absolute;
  left: 14px;
`;
