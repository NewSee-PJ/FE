import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.elevated};
  border-radius: 50px;
  padding: 12px 16px;
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.bg.elevated};
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.colors.text.primary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
  }
  width: 100%;
`;
