// 링크 바로가기 모듈 내부 항목 컴포넌트

import styled from "styled-components";
import Image from "../base/Image";
import { motion } from "framer-motion";

interface LinkIconBoxProps {
    link: string;
    src: string;
}

export default function LinkIconBox({ link, src }: LinkIconBoxProps): JSX.Element {
    return (
        <Area
            onClick={() => {
                window.open(link);
            }}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ContentArea>
                <Image src={src} alt="" width="100%" />
            </ContentArea>
        </Area>
    );
}

const Area = styled(motion.button)`
    aspect-ratio: 1/1;
    grid-column: span 1;
    grid-row: span 1;
    text-align: center;
`;

const ContentArea = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 20%;
    overflow: hidden;
    /* object-fit: cover; */
    filter: brightness(${({ theme }) => (theme.mode === "light" ? "1.0" : "0.8")});
    transition: filter 0.5s ease;
`;
