import "styled-components";
import type { fonts, componentColor, gradients } from "@/styles/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: typeof fonts;
    colors: typeof componentColor;
    gradients: typeof gradients;
  }
}
