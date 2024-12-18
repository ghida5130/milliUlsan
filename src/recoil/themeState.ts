import { atom } from "recoil";

export type ThemeStateType = "light" | "dark";

const getInitialTheme = (): ThemeStateType => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
};

export const themeState = atom<ThemeStateType>({
    key: "themeState",
    default: getInitialTheme(),
});
