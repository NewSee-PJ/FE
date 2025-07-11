import * as S from "./index.styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LevelTag } from "@/components/common/LevelTag";
import { BookmarkButton } from "@/components/common/BookmarkButton";
import TopBar from "@/components/common/TopBar";
import { useNewsStore } from "@/stores/news";
import { mockNewsData } from "./data/newsDetail";
import NewsDefaultImage from "@/assets/images/newsImage.png";
import { getTimeAgo } from "@utils/date";
import {
  KeywordsSection,
  SummarySection,
  NewsContentSection,
  NewsFooter,
} from "./components";

export const NewsDetail = () => {
  const { newsId } = useParams();
  const id = Number(newsId);

  const { news, setNews } = useNewsStore();
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (!id) return;

    if (news?.newsId === id) return;

    setLoading(true);
    const foundNews = mockNewsData.find((item) => item.newsId === id);
    if (foundNews) {
      setNews(foundNews);
      setNotFound(false);
      setImageSrc(foundNews.imageUrl);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }, [id]);

  if (notFound || !news || news.newsId !== id) {
    // TODO: notFound 관련 UI 필요. 추후 대체 예정
    return <div>뉴스를 찾을 수 없습니다.</div>;
  }

  if (loading) {
    // TODO: loading 관련 UI 필요. 추후 대체 예정
    return <div>로딩 중입니다...</div>;
  }

  return (
    <S.Container>
      <TopBar title="뉴스 상세" />
      <S.HeadContainer>
        <S.HeadContentContainer>
          <S.NewsInfoContainer>
            <S.NewsInfo>
              <p>{news.category}</p>
              <p>{news.source}</p>
              <p>{getTimeAgo(news.time)}</p>
            </S.NewsInfo>
            <BookmarkButton newsId={id} />
          </S.NewsInfoContainer>
          <S.Title>{news.title}</S.Title>
          <S.LevelNShare>
            <LevelTag />
            <S.ShareButton>공유하기</S.ShareButton>
          </S.LevelNShare>
        </S.HeadContentContainer>
        <S.Image
          src={imageSrc}
          alt={news.title}
          onError={() => setImageSrc(NewsDefaultImage)}
        />
      </S.HeadContainer>
      <S.Line />
      <NewsContentSection />
      <S.Line />
      <KeywordsSection />
      <S.Line />
      <SummarySection />
      <S.Line />
      <NewsFooter />
    </S.Container>
  );
};
