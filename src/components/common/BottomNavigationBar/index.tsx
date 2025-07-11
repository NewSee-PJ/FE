import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./index.styles";
import { useTheme } from "styled-components";
import HomeIcon from "@assets/icons/common/home.svg?react";
import MypageIcon from "@assets/icons/common/news.svg?react";
import NewsIcon from "@assets/icons/common/words.svg?react";
import WordsIcon from "@assets/icons/common/mypage.svg?react";

interface NavItem {
  label: string;
  path: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItem[] = [
  {
    label: "홈",
    path: "/",
    icon: HomeIcon,
  },
  {
    label: "뉴스",
    path: "/news",
    icon: NewsIcon,
  },
  {
    label: "단어장",
    path: "/words",
    icon: WordsIcon,
  },
  {
    label: "마이페이지",
    path: "/mypage",
    icon: MypageIcon,
  },
];

export default function BottomNavigationBar() {
  const navigate = useNavigate();
  const theme = useTheme();

  const activeColor = theme.colors.text.blue;
  const defaultColor = theme.colors.text.disabled;

  return (
    <S.BottomNav>
      <ul>
        {navItems.map((item) => {
          const Icon = item.icon;
          const handleClick = () => {
            navigate(item.path);
          };
          return (
            <li key={item.path} onClick={handleClick}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      fill={isActive ? activeColor : defaultColor}
                      width={24}
                      height={24}
                    />
                    <span
                      style={{ color: isActive ? activeColor : defaultColor }}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </S.BottomNav>
  );
}
