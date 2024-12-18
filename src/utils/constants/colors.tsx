// 라이트-다크 모드 전환시의 색상 통합 및 관리를 위한 colors 객체

interface ColorTypes {
    [key: string]: string | DarkThemeColorTypes;
    DARK: DarkThemeColorTypes;
}

interface DarkThemeColorTypes {
    [key: string]: string;
}

export const C: ColorTypes = {
    BASE: "#c6f2ff",
    TEXT: "#000000",
    GLASS: "rgb(255, 255, 255, 0.3) ",
    NEU_OUT_RIGHT_SHADOW: "#b3b3b3",
    NEU_OUT_LEFT_SHADOW: "#ffffff",
    NEU_IN_RIGHT_SHADOW: "",
    NEU_IN_LEFT_SHADOW: "",
    NAV_BAR: "rgb(247, 247, 247, 0.6)",
    DARK: {
        BASE: "#2e6966",
        TEXT: "#ffffff",
        GLASS: "rgb(0,0,0,0.3)",
        NEU_OUT_RIGHT_SHADOW: "#060606",
        NEU_OUT_LEFT_SHADOW: "#323232",
        NAV_BAR: "rgb(25, 25, 25, 0.6)",
    },
};
