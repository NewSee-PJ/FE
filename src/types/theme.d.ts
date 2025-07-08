import "styled-components";
import type { fonts, componentColor } from "@/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: typeof fonts;
    colors: typeof componentColor;
  }
}
