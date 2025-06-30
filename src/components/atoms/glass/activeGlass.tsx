// 버튼, 배경 이미지 추가 기능이 포함된 기본 Glass 컴포넌트
// 1x1 사이즈로 고정되어있음

import styled from "styled-components";
import { ThemeType } from "../../../styles/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../recoil/themeState";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ActiveGlassProps {
    children: React.ReactNode;
    BackgroundImageUrl?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ActiveGlass({ children, BackgroundImageUrl, onClick }: ActiveGlassProps): JSX.Element {
    const userTheme = useRecoilValue(themeState);
    const hasOnClick = Boolean(onClick);

    // intersectionObserver 적용
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1, rootMargin: "10% 0px 0px 0px" });
    return (
        <Area
            onClick={onClick}
            $hasOnClick={hasOnClick}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            ref={ref}
        >
            {inView ? (
                <Background $BackgroundImageUrl={BackgroundImageUrl} $userTheme={userTheme}>
                    {children}
                </Background>
            ) : null}
        </Area>
    );
}

const Area = styled(motion.button)<{ $hasOnClick: boolean }>`
    ${({ $hasOnClick }) => ($hasOnClick ? "" : "cursor: default")};
    aspect-ratio: 1 / 1;
    grid-column: span 1;
    grid-row: span 1;
`;

const Background = styled.div<{ theme: ThemeType; $BackgroundImageUrl?: string; $userTheme: string }>`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: ${({ theme }) => theme.glassBoxColor};
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: background-color 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
    box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid
        ${({ $userTheme }) => ($userTheme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)")};

    &:hover {
        box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.3);
        border: 1px solid
            ${({ $userTheme }) => ($userTheme === "light" ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)")};
    }

    &::before {
        content: "";
        position: absolute;
        border-radius: 20px;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        background: url(${(props) => props.$BackgroundImageUrl}) center / cover no-repeat;
        opacity: 0.1; /* 투명도 설정 */
        z-index: -1; /* 내용보다 뒤에 배경이 위치하도록 설정 */
        transition: opacity 0.5s ease;
    }
    &:hover::before {
        opacity: 1;
        z-index: 1;
    }
`;
