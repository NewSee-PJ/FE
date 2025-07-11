import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

export const TitleNInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
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

export const InfoText = styled.p`
  ${({ theme }) => theme.fonts.Body3}
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const GotoWordsButton = styled.button`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.bg.green};
  padding: 4px 12px;
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.text.white};
`;

export const WordsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  overflow-x: auto;

  -ms-overflow-style: none; /* IE & Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
