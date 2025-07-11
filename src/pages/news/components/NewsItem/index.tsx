import * as S from "./index.styles";
import type { NewsListItemType } from "@/types/newsList";
import defaultImage from "@assets/icons/common/logo.svg";
import { getTimeAgo } from "@utils/date";
import { BookmarkButton } from "@/components/common/BookmarkButton";
import { useBookmarkStore } from "@/stores/bookmark";
import { useNavigate } from "react-router-dom";

interface NewsItemProps {
  news: NewsListItemType;
}
export const NewsItem = ({ news }: NewsItemProps) => {
  const navigate = useNavigate();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

  const bookmarkIds = useBookmarkStore((state) => state.bookmarkIds);
  const isBookmarked = bookmarkIds.includes(news.newsId);

  const handleClick = () => {
    navigate(`/news/${news.newsId}`);
  };

  return (
    <S.Container onClick={handleClick}>
      <S.Image
        src={news.imageUrl}
        alt={news.title}
        onError={handleImageError}
      />
      <S.ContentContainer>
        <S.HeadDescription>
          <S.HeadDescriptionText>
            <p>{news.category}</p>
            <p>{news.source}</p>
            <p>{getTimeAgo(news.time)}</p>
          </S.HeadDescriptionText>
          {isBookmarked !== undefined && (
            <BookmarkButton
              newsId={news.newsId}
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          )}
        </S.HeadDescription>
        <S.Title>{news.title}</S.Title>
        <S.Description>{news.content}</S.Description>
      </S.ContentContainer>
    </S.Container>
  );
};
