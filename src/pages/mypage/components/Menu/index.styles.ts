import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg.white};
  padding: 20px 16px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border.divider};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MenuText = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.colors.text.primary};
`;
