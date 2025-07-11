import * as S from "./index.styles";
import { useNewsStore } from "@/stores/news";

export const NewsFooter = () => {
  const news = useNewsStore((state) => state.news);

  const handleClick = () => {
    window.open(news?.url, "_blank");
  };

  return (
    <S.Container>
      <p>
        기사 내용이 이해가 잘 되셨나요?
        <br /> 원문을 통해 기사를 다시 한 번 읽어보아요.
      </p>
      <S.RouteButton onClick={handleClick}>원문 기사 바로가기</S.RouteButton>
    </S.Container>
  );
};
