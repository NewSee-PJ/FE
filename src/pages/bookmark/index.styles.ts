import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  min-height: 0;
`;

export const ContentArea = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  overflow: scroll;
  align-items: flex-start;
  align-self: stretch;
  width: 100%;
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.colors.bg.white};

  -ms-overflow-style: none; /* IE & Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const BodySection = styled.div`
  flex: 1;
  width: 100%;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg.based};
  padding-bottom: 50px;
`;
