// 내부에 2x2 그리드를 가지고있는 Glass 컴포넌트
// 메인페이지 링크모음 모듈에 사용됨 => props로 유연한 그리드 컴포넌트 제작이 가능할듯
// row, column 조절 가능, aspect-ratio가 설정됨

import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../recoil/themeState";
import { motion } from "framer-motion";

interface GridGlassProps {
    children: React.ReactNode;
    row?: string;
    column?: string;
}

export default function GridGlass({ children, row, column }: GridGlassProps): JSX.Element {
    const userTheme = useRecoilValue(themeState);

    row = row ? row : "1";
    column = column ? column : "1";

    return (
        <GlassArea
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            $row={row}
            $column={column}
        >
            <Background $userTheme={userTheme}>{children}</Background>
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
    display: grid;
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 15px;
    padding: 12px;
`;
