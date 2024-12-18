// 특정 Glass 컴포넌트 내의 리액트쿼리 에러 발생시 사용되는 Glass 컴포넌트
// row, column 조절 가능, aspect-ratio가 설정됨

import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../recoil/themeState";
import { motion } from "framer-motion";
import { Text } from "../../../utils/constants/text";

interface ErrorGlassProps {
    message?: string;
    row?: string;
    column?: string;
}

export default function ErrorGlass({ message, row, column }: ErrorGlassProps): JSX.Element {
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
            <Background $userTheme={userTheme}>
                <Text.S2>{message}</Text.S2>
                <br />
                <Text.S2>Error</Text.S2>
            </Background>
        </GlassArea>
    );
}

const GlassArea = styled(motion.div)<{ $row?: string; $column?: string }>`
    position: relative;
    grid-column: span ${({ $row }) => $row};
    grid-row: span ${({ $column }) => $column};
    aspect-ratio: ${({ $row, $column }) => ($row === $column ? `${$row}/${$column}` : "")};
    text-align: center;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1);
`;

const Background = styled.div<{ $userTheme: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: background-color 0.5s ease;
    border: 5px solid
        ${({ $userTheme }) => ($userTheme === "light" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)")};
`;
