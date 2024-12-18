// 최상단 스크롤 버튼

import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { themeState } from "../../../recoil/themeState";
import Image from "../../atoms/base/Image";
import { useEffect, useState } from "react";
import { ThemeType } from "../../../styles/theme";

export default function ScrollTopBtn(): JSX.Element {
    const userTheme = useRecoilValue(themeState);
    const [scroll, setScroll] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setScroll(scrollTop > 400);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const topScrollBtnClick = () => {
        if (scroll) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <Btn onClick={topScrollBtnClick} $userTheme={userTheme} $scroll={scroll}>
            <Image
                src="/images/arrow.svg"
                alt="topScrollBtn"
                width="25px"
                style={{
                    transform: `rotate(270deg)`,
                    filter: `brightness(${userTheme === "light" ? "0%" : "100%"})`,
                    transition: "filter 0.5s ease",
                }}
            />
        </Btn>
    );
}

const Btn = styled.button<{ $userTheme: string; $scroll: boolean; theme: ThemeType }>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 90px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.glassBoxColor};
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid
        ${({ $userTheme }) => ($userTheme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)")};
    box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1);
    opacity: ${({ $scroll }) => ($scroll ? 1 : 0)};
    transition: opacity 0.5s ease, background-color 0.5s ease, border 0.5s ease;
`;
