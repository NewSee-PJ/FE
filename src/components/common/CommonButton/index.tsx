import * as S from "./index.styles";

interface CommonButtonProps {
  title: string;
  onClick: () => void;
  variant: "blue" | "red" | "disabled";
}

const CommonButton = ({ title, onClick, variant }: CommonButtonProps) => {
  return (
    <S.Container variant={variant} onClick={onClick}>
      {title}
    </S.Container>
  );
};

export default CommonButton;
