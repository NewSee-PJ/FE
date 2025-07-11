import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 4px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TitleText = styled.h2`
  ${({ theme }) => theme.fonts.Body1B}
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SummaryContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bg.yellowBg};
`;

export const SummaryText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  ${({ theme }) => theme.fonts.Body2}
`;
