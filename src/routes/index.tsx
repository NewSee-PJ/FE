import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/common/Layout";
import {
  Home,
  Words,
  Mypage,
  News,
  Login,
  KakaoLogin,
  NewsDetail,
} from "@pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "words", element: <Words /> },
      { path: "mypage", element: <Mypage /> },
      { path: "news", element: <News /> },
      { path: "news/:newsId", element: <NewsDetail /> },
      { path: "login", element: <Login /> },
      { path: "login/oauth2/code/kakao", element: <KakaoLogin /> },
    ],
  },
]);
