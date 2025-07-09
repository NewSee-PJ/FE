import * as S from "./index.styles";

interface InputUrlContainerProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputUrlContainer = ({ value, onChange }: InputUrlContainerProps) => {
  return (
    <S.Container>
      <S.Input
        placeholder="뉴스 기사 URL을 입력하세요"
        value={value}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default InputUrlContainer;
