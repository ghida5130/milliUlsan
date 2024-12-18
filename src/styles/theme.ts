import { C } from "../utils/constants/colors";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    mode: "light",
    bgColor: C.BASE,
    textColor: C.TEXT,
    glassBoxColor: C.GLASS,
    NeuMorphOutRightShadow: C.NEU_OUT_LEFT_SHADOW,
    NeuMorphOutLeftShadow: C.NEU_OUT_RIGHT_SHADOW,
    NavBarColor: C.NAV_BAR,
};

export const darkTheme: DefaultTheme = {
    mode: "dark",
    bgColor: C.DARK.BASE,
    textColor: C.DARK.TEXT,
    glassBoxColor: C.DARK.GLASS,
    NeuMorphOutRightShadow: C.DARK.NEU_OUT_LEFT_SHADOW,
    NeuMorphOutLeftShadow: C.DARK.NEU_OUT_RIGHT_SHADOW,
    NavBarColor: C.DARK.NAV_BAR,
};

export type ThemeType = typeof lightTheme;
