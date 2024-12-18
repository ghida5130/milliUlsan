// 필터모듈 내부에 들어가는 미니 모듈

import styled from "styled-components";
import { ThemeType } from "../../../styles/theme";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../recoil/themeState";

interface MiniBoxProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isActive?: boolean;
    borderRadius?: string;
    ratio?: string;
    row?: string;
    column?: string;
}

export default function MiniBox({
    children,
    borderRadius,
    onClick,
    isActive,
    ratio,
    row,
    column,
}: MiniBoxProps): JSX.Element {
    row = row ? row : "1";
    column = column ? column : "1";
    const $userTheme = useRecoilValue(themeState);
    return (
        <Area onClick={onClick} $ratio={ratio} $row={row} $column={column}>
            <Content $isActive={isActive} $borderRadius={borderRadius} $userTheme={$userTheme}>
                {children}
            </Content>
        </Area>
    );
}

const Area = styled.button<{ $ratio?: string; $row?: string; $column?: string }>`
    aspect-ratio: ${({ $ratio, $row, $column }) =>
        $ratio || $ratio === "" ? $ratio : $row === $column ? `${$row}/${$column}` : ""};
    /* aspect-ratio: ${({ $row, $column }) => ($row === $column ? `${$row}/${$column}` : "")}; */

    grid-column: span ${({ $row }) => $row};
    grid-row: span ${({ $column }) => $column};
`;

const Content = styled.div<{ theme: ThemeType; $isActive?: boolean; $borderRadius?: string; $userTheme: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 6px;
    border-radius: ${({ $borderRadius }) => $borderRadius || "10px"};
    position: relative;
    background-color: ${({ $isActive, theme }) =>
        $isActive
            ? theme.mode === "light"
                ? "none"
                : "rgba(0,0,0,0.3)"
            : theme.mode === "light"
            ? "rgba(255,255,255,0.3)"
            : "none"};
    box-shadow: ${({ $isActive, theme }) =>
        $isActive
            ? `0 0 0 ${theme.NeuMorphOutRightShadow}, 0 0 0 ${theme.NeuMorphOutLeftShadow}, inset 3px 3px 7px ${theme.NeuMorphOutLeftShadow}, inset -3px -3px 7px ${theme.NeuMorphOutRightShadow};`
            : `3px 3px 7px ${theme.NeuMorphOutLeftShadow}, -3px -3px 7px ${theme.NeuMorphOutRightShadow}, inset 0 0 0 ${theme.NeuMorphOutRightShadow}, inset 0 0 0 ${theme.NeuMorphOutLeftShadow}`};
    transition: background-color 0.5s ease, box-shadow 0.5s ease;
`;
