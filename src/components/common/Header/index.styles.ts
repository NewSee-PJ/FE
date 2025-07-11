import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 430px;
  padding: 12px 16px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.bg.white};
`;

export const ButtonContainer = styled.button`
  display: flex;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.text.blue};
  ${({ theme }) => theme.fonts.Button2};
  background: ${({ theme }) => theme.colors.bg.blueBg};
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.border.blue};
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const UserName = styled.p`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.text.secondary};
`;
