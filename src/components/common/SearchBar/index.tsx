import * as S from "./index.styles";
import SearchIcon from "@assets/icons/common/search.svg?react";
import useInput from "@/hooks/common/useInput";
import { useCallback } from "react";

export const SearchBar = () => {
  const { value, onChange, reset } = useInput();

  const handleSearch = useCallback(() => {
    if (!value.trim()) return;
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
          placeholder="ddd"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </S.InputContainer>
    </S.Container>
  );
};
