// 모든 페이지에 적용되는 그리드 컴포넌트

import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

export default function PageGridArea({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <Area>
            <AnimatePresence>{children}</AnimatePresence>
        </Area>
    );
}

const Area = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 25px;
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    @media screen and (min-width: 1550px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
`;
