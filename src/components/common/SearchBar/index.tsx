import * as S from "./index.styles";
import SearchIcon from "@assets/icons/common/search.svg?react";
import useInput from "@/hooks/common/useInput";
import { useCallback } from "react";

interface SearchBarProps {
  onSearch: (keyword: string) => void;
  placeholder?: string;
}

export const SearchBar = ({
  onSearch,
  placeholder = "검색어를 입력하세요",
}: SearchBarProps) => {
  const { value, onChange, reset } = useInput();

  const handleSearch = useCallback(() => {
    const trimmed = value.trim();
    if (!value.trim()) return;
    onSearch(trimmed);
    console.log("검색어:", value);
  }, [value, reset]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.Container>
      <S.InputContainer>
        <SearchIcon onClick={handleSearch} style={{ cursor: "pointer" }} />
        <S.Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </S.InputContainer>
    </S.Container>
  );
};
