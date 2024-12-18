// 테마 (라이트/다크) 변경 버튼

import styled from "styled-components";
import { ThemeType } from "../../../styles/theme";
import Image from "../../atoms/base/Image";
import { useRecoilState } from "recoil";
import { themeState, ThemeStateType } from "../../../recoil/themeState";
import { useEffect } from "react";

export default function ThemeModeBtn(): JSX.Element {
    const [userTheme, setUserTheme] = useRecoilState(themeState);
    useEffect(() => {
        localStorage.setItem("theme", userTheme);
    }, [userTheme]);
    return (
        <Btn
            onClick={() => {
                setUserTheme((prevTheme: ThemeStateType) => (prevTheme === "light" ? "dark" : "light"));
            }}
            $userTheme={userTheme}
        >
            <Moon $userTheme={userTheme}>
                <Image src="/images/themeModeIcon/dark.svg" alt="" width="40px"></Image>
            </Moon>
            <Sun $userTheme={userTheme}>
                <Image src="/images/themeModeIcon/light.svg" alt="" width="40px"></Image>
            </Sun>
        </Btn>
    );
}

const Btn = styled.button<{ theme: ThemeType; $userTheme: string }>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bgColor};
    overflow: hidden;
    background-color: ${({ theme }) => theme.glassBoxColor};
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid
        ${({ $userTheme }) => ($userTheme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)")};
    box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1);
    transition: opacity 0.5s ease, background-color 0.5s ease, border 0.5s ease;
`;

const Sun = styled.div<{ $userTheme: string }>`
    position: absolute;
    top: 4px;
    right: ${({ $userTheme }) => ($userTheme === "light" ? "4px" : "50px")};
    transition: all 0.5s ease;
`;

const Moon = styled.div<{ $userTheme: string }>`
    position: absolute;
    top: 5px;
    right: ${({ $userTheme }) => ($userTheme === "light" ? "-50px" : "5px")};
    transition: all 0.5s ease;
`;
