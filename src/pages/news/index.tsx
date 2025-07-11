import * as S from "./index.styles";
import { LevelTag } from "@/components/common/LevelTag";
import { SearchBar } from "@/components/common/SearchBar";
import { CategoryTag } from "@/components/common/CategoryTag";
import { NEWS_CATEGORY_TAGS } from "@/types/category";
import { useState } from "react";
import { mockNewsData } from "./data/newsList";
import type { NewsListItemType } from "@/types/newsList";
import { NewsItem } from "./components";
import { useNewsListStore } from "@/stores/newsList";

export const News = () => {
  const [selectedTag, setSelectedTag] = useState("전체");

  // 테스트
  const setNewsList = useNewsListStore((state) => state.setNewsList);
  setNewsList(mockNewsData);
  const newsList = useNewsListStore((state) => state.newsList);
  // 삭제 예정

  const filteredNews: NewsListItemType[] =
    selectedTag === "전체"
      ? newsList
      : newsList.filter((item) => item.category === selectedTag);

  return (
    <S.Container>
      <S.HeaderSection>
        <S.HeadTitleContainer>
          <S.HeadText>오늘의 뉴스</S.HeadText>
          <LevelTag />
        </S.HeadTitleContainer>
        <SearchBar
          placeholder="뉴스를 검색하세요"
          onSearch={(keyword) => console.log("뉴스 검색:", keyword)}
        />
        <S.CategoryList>
          {["전체", ...NEWS_CATEGORY_TAGS].map((tag, index) => (
            <CategoryTag
              key={index}
              tagTitle={tag}
              isActive={selectedTag === tag}
              onSelectTag={setSelectedTag}
            />
          ))}
        </S.CategoryList>
      </S.HeaderSection>
      <S.BodySection>
        {filteredNews.map((newsItem) => (
          <NewsItem news={newsItem} />
        ))}
      </S.BodySection>
    </S.Container>
  );
};
