import * as S from "../index.styles";

interface LoadingModalProps {
  message?: string;
}

const LoadingModal = ({
  message = "잠시만 기다려주세요...",
}: LoadingModalProps) => {
  return (
    <>
      <S.ModalTitle>로딩 중</S.ModalTitle>
      <S.ModalText>{message}</S.ModalText>
    </>
  );
};

export default LoadingModal;
