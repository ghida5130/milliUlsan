// 기본 Glass 컴포넌트
// row, column 조절 가능, aspect-ratio가 설정됨

import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../recoil/themeState";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface GlassProps {
    children: React.ReactNode;
    row?: string;
    column?: string;
}

export default function Glass({ children, row, column }: GlassProps): JSX.Element {
    const userTheme = useRecoilValue(themeState);

    // intersectionObserver 적용
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1, rootMargin: "10% 0px 0px 0px" });

    row = row ? row : "1";
    column = column ? column : "1";

    return (
        <GlassArea
            $row={row}
            $column={column}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            ref={ref}
        >
            {inView ? <Background $userTheme={userTheme}>{children}</Background> : null}
        </GlassArea>
    );
}

const GlassArea = styled(motion.div)<{ $row?: string; $column?: string }>`
    grid-column: span ${({ $row }) => $row};
    grid-row: span ${({ $column }) => $column};
    aspect-ratio: ${({ $row, $column }) => ($row === $column ? `${$row}/${$column}` : "")};
    text-align: center;
`;

const Background = styled.div<{ $userTheme: string }>`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: ${({ theme }) => theme.glassBoxColor};
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: background-color 0.5s ease, transform 0.3s ease;
    box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1);
    border: 1px solid
        ${({ $userTheme }) => ($userTheme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)")};
`;
