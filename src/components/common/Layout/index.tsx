import { Outlet } from "react-router-dom";
import * as S from "./index.styles";
import Header from "../Header";
import BottomNav from "@components/common/BottomNavigationBar";

export default function Layout() {
  return (
    <S.AppContainer>
      <S.AppWrapper>
        <Header />
        <S.AppMain>
          <Outlet />
        </S.AppMain>
        <BottomNav />
      </S.AppWrapper>
    </S.AppContainer>
  );
}
