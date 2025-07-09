import * as S from "./index.styles";

interface CommonButtonProps {
  title: string;
  onClick: () => void;
  variant: "blue" | "red" | "disabled";
  disabled?: boolean;
}

const CommonButton = ({
  title,
  onClick,
  variant,
  disabled = false,
}: CommonButtonProps) => {
  return (
    <S.Container disabled={disabled} variant={variant} onClick={onClick}>
      {title}
    </S.Container>
  );
};

export default CommonButton;
