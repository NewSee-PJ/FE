import styled from "styled-components";

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.bg.white};
  border: 1px solid ${({ theme }) => theme.colors.border.divider};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.div`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const JoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.text.disabled};
`;

export const JoinDate = styled.span``;

export const WordInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bg.blueBg};
`;

export const WordCount = styled.div`
  ${({ theme }) => theme.fonts.Head3};
  color: ${({ theme }) => theme.colors.text.blue};
`;

export const WordLabel = styled.div`
  ${({ theme }) => theme.fonts.Body3};
  color: ${({ theme }) => theme.colors.text.disabled};
`;

export const EditButton = styled.button`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  ${({ theme }) => theme.fonts.Button2}
  border: 1px solid ${({ theme }) => theme.colors.border.divider};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bg.based};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  cursor: pointer;
  text-align: center;
`;
