import {
  INPUT_TEXT_STYLES,
  MEDIA_STYLES,
  TEXT_STYLES,
} from "@/constants/theme";

export const DarkTheme = {
  colors: {
    baseBlack: "#0E0C15",
    baseWhite: "#FFFFFF",

    accentPrimary: "#1C64F2",
    accentPrimaryLight: "#4785FF",
    accentStrong: "#073CA4",
    accentStrongDown: "#0E3176",

    grayScaleGray1: "#616D8D",
    grayScaleGray2: "#313E62",
    grayScaleGray3: "#222B44",
    grayScaleGray4: "#121825",
    grayScaleGray5: "#374151",
    grayScaleGray6: "#9CA3AF",

    otherPremiumGradient:
      "linear-gradient(90deg, #1C64F2 -0.39%, #D41CF2 99.61%)",
    otherCritic: "#FE4242",
    otherGreen: "#1ABB34",
  },
  mediaStyles: MEDIA_STYLES,
  textStyles: TEXT_STYLES,
  inputTextStyles: INPUT_TEXT_STYLES,
};

export const LightTheme = {
  colors: {
    base: {
      black: "#FFFFFF",
      white: "#0E0C15",
    },
    accent: {
      primary: "#1C64F2",
      primaryLight: "#4785FF",
      strong: "#073CA4",
      strongDown: "#0E3176",
    },
    grayScale: {
      gray1: "#ADB8C0",
      gray2: "#CDD5DA",
      gray3: "#DBE0E4",
      gray4: "#F5F6F7",
      gray5: "#ADB5BD",
      gray6: "#DDE8F3",
    },
    other: {
      premiumGradient: "linear-gradient(90deg, #1C64F2 -0.39%, #D41CF2 99.61%)",
      critic: "#FE4242",
    },
    otherGreen: "#1ABB34",
  },
  mediaStyles: MEDIA_STYLES,
  textStyles: TEXT_STYLES,
  inputTextStyles: INPUT_TEXT_STYLES,
};

type CustomTheme = typeof DarkTheme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
