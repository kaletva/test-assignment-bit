import { TEXT_STYLES } from "@/constants";
import { DarkTheme } from "@/shared/Global";

export type TextStylesType = keyof typeof TEXT_STYLES.desktop;
export type ColorsType = keyof typeof DarkTheme.colors;
