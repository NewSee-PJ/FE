import * as S from "../index.styles";
import CommonButton from "../../CommonButton";
interface ConfirmModalProps {
  title?: string;
  message?: string;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmModal = ({
  title,
  message,
  onConfirm,
  onClose,
}: ConfirmModalProps) => {
  return (
    <>
      <S.ModalTitle>{title}</S.ModalTitle>
      <S.ModalText>{message}</S.ModalText>
      <S.ModalButtonGroup>
        <CommonButton title="취소" variant="disabled" onClick={onClose} />
        <CommonButton title="확인" variant="blue" onClick={onConfirm} />
      </S.ModalButtonGroup>
    </>
  );
};

export default ConfirmModal;
