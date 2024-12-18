// 반응형으로 표시되는 상단바 버튼 컴포넌트
// 좌측상단 메인버튼, 모바일용 메뉴버튼에 사용됨

import styled from "styled-components";

const HeaderImageBtn = styled.button<{ $responsiveHidden: boolean }>`
    z-index: 9999;
    @media screen and (min-width: 768px) {
        display: ${({ $responsiveHidden }) => ($responsiveHidden ? "none" : "block")};
    }
`;

export default HeaderImageBtn;
