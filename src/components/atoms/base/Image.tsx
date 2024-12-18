// 이미지 삽입용 컴포넌트

import styled from "styled-components";

interface ImageProps {
    src: string;
    alt: string;
    width?: string;
    style?: React.CSSProperties;
}

const Image = ({ src, alt, width, style }: ImageProps): JSX.Element => {
    return <StyledImg src={src} alt={alt} width={width} style={style} />;
};

const StyledImg = styled.img<{ width?: string }>`
    width: ${(props) => props.width || "100%"};
    height: auto;
`;

export default Image;
