// 최상단 스크롤 버튼

import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { themeState } from "../../../recoil/themeState";
import Image from "../../atoms/base/Image";
import { ThemeType } from "../../../styles/theme";

interface MainPageFilterBtnProps {
    setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MainPageFilterBtn({ setIsFilterActive }: MainPageFilterBtnProps): JSX.Element {
    const userTheme = useRecoilValue(themeState);

    const toggleFilter = () => {
        setIsFilterActive((prevState) => !prevState);
    };

    return (
        <Btn $userTheme={userTheme} onClick={toggleFilter}>
            <Image
                src="/images/filterIcon.svg"
                alt="mainPageFilterBtn"
                width="25px"
                style={{
                    filter: `brightness(${userTheme === "light" ? "0%" : "100%"})`,
                    transition: "filter 0.5s ease",
                }}
            />
        </Btn>
    );
}

const Btn = styled.button<{ $userTheme: string; theme: ThemeType }>`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 20px;
    right: 90px;
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
    transition: opacity 0.5s ease, background-color 0.5s ease, border 0.5s ease;
`;
