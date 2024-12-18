// 2x2 내부 그리드를 포함한 2x2 사이즈 Glass 컴포넌트
// 메인페이지, 날씨페이지의 날씨 모듈에 사용됨

import styled from "styled-components";
import { ThemeType } from "../../../styles/theme";
import { motion } from "framer-motion";

interface WeatherGridGlassProps {
    children: React.ReactNode;
    BackgroundImageUrl?: string;
}

export default function WeatherGridGlass({ children, BackgroundImageUrl }: WeatherGridGlassProps): JSX.Element {
    return (
        <Area layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Content $BackgroundImageUrl={BackgroundImageUrl}>{children}</Content>
        </Area>
    );
}

const Area = styled(motion.div)`
    aspect-ratio: 1 / 1;
    grid-column: span 2;
    grid-row: span 2;
`;

const Content = styled.div<{ $BackgroundImageUrl?: string; theme: ThemeType }>`
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.1);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 10px;
    &::before {
        content: "";
        position: absolute;
        border-radius: 25px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(${(props) => props.$BackgroundImageUrl}) center / cover no-repeat;
        opacity: 0.5;
        z-index: -1;
    }
`;
