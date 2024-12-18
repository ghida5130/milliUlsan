// 모바일용 메뉴 버튼 이미지 및 애니메이션 구현 컴포넌트

import styled from "styled-components";

interface HeaderMenuBtnProps {
    isActive: boolean;
}

export default function HeaderMenuBtn({ isActive }: HeaderMenuBtnProps): JSX.Element {
    return (
        <Toggler>
            <Line1 $isActive={isActive} />
            <Line2 $isActive={isActive} />
            <Line3 $isActive={isActive} />
        </Toggler>
    );
}

const Toggler = styled.div`
    width: 40px;
    height: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Line1 = styled.div<{ $isActive: boolean }>`
    background: black;
    height: 4px;
    border-radius: 20px;
    width: 80%;
    transition-duration: 500ms;

    ${({ $isActive }) =>
        $isActive &&
        `
            -webkit-transform: rotate(45deg) translateY(5px) translateX(11px);
            -ms-transform: rotate(45deg) translateY(5px) translateX(11px);
            transform: rotate(45deg) translateY(5px) translateX(11px);
        `}
`;
const Line2 = styled.div<{ $isActive: boolean }>`
    background: black;
    height: 4px;
    border-radius: 20px;
    width: 80%;
    transition-duration: 500ms;

    ${({ $isActive }) =>
        $isActive &&
        `
            -webkit-transform: rotate(-45deg) translateY(5px) translateX(2px);
            -ms-transform: rotate(-45deg) translateY(5px) translateX(2px);
            transform: rotate(-45deg) translateY(5px) translateX(2px);
        `}
`;
const Line3 = styled.div<{ $isActive: boolean }>`
    background: black;
    height: 4px;
    border-radius: 20px;
    width: 80%;
    transition-duration: 500ms;

    ${({ $isActive }) =>
        $isActive &&
        `
            transform: scaleX(0);
            transform-origin: left;
        `}
`;
