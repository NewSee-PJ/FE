import * as S from "./index.styles";

const Banner = () => {
  return (
    <S.Container>
      <S.Title>오늘의 뉴스를 쉽게!</S.Title>
      <S.Content>내 수준에 맞는 뉴스로 문해력을 키워보세요</S.Content>
      <S.Content>
        로그인하면 내 문해력 맞춤으로
        <br />
        서비스를 이용할 수 있어요!
      </S.Content>
    </S.Container>
  );
};

export default Banner;
