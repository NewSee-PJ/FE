import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/globalStyle";
import { router } from "@routes/index";
import ModalRoot from "./components/common/Modal";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
      <ModalRoot />
    </ThemeProvider>
  );
}
