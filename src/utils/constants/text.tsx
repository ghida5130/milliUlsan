// 반응형 폰트 사이즈, 빈 텍스트 요소 방지, 스타일 관리 편의성 등을 위한 통합 텍스트 컴포넌트

import React from "react";
import { F } from "./fontSize";
import styled from "styled-components";

interface TextProps {
    children: React.ReactNode;
    fontWeight?: string;
    style?: React.CSSProperties;
}

const S1 = ({ children, fontWeight, style }: TextProps) => {
    return (
        <CustomText
            style={style}
            fontWeight={fontWeight}
            $pcSize={F.SMALL}
            $tabletSize={F.VERY_SMALL}
            $mobileSize={F.SMALLEST}
        >
            {children}
        </CustomText>
    );
};
const S2 = ({ children, fontWeight, style }: TextProps) => {
    return (
        <CustomText
            style={style}
            fontWeight={fontWeight}
            $pcSize={F.MEDIUM}
            $tabletSize={F.SMALL}
            $mobileSize={F.VERY_SMALL}
        >
            {children}
        </CustomText>
    );
};
const S3 = ({ children, fontWeight, style }: TextProps) => {
    return (
        <CustomText
            style={style}
            fontWeight={fontWeight}
            $pcSize={F.LARGE}
            $tabletSize={F.MEDIUM}
            $mobileSize={F.SMALL}
        >
            {children}
        </CustomText>
    );
};
const S4 = ({ children, fontWeight, style }: TextProps) => {
    return (
        <CustomText
            style={style}
            fontWeight={fontWeight}
            $pcSize={F.VERY_LARGE}
            $tabletSize={F.LARGE}
            $mobileSize={F.MEDIUM}
        >
            {children}
        </CustomText>
    );
};
const S5 = ({ children, fontWeight, style }: TextProps) => {
    return (
        <CustomText
            style={style}
            fontWeight={fontWeight}
            $pcSize={F.LARGEST}
            $tabletSize={F.VERY_LARGE}
            $mobileSize={F.LARGE}
        >
            {children}
        </CustomText>
    );
};
const S6 = ({ children, fontWeight, style }: TextProps) => {
    return (
        <CustomText
            style={style}
            fontWeight={fontWeight}
            $pcSize={F.MEGA}
            $tabletSize={F.LARGEST}
            $mobileSize={F.VERY_LARGE}
        >
            {children}
        </CustomText>
    );
};

const CustomText = styled.span<{ fontWeight?: string; $pcSize: string; $tabletSize: string; $mobileSize: string }>`
    display: inline-block;
    white-space: pre-wrap;
    font-size: ${(props) => props.$mobileSize};
    font-weight: ${(props) => props.fontWeight || "400"};
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    @media screen and (min-width: 768px) {
        font-size: ${(props) => props.$tabletSize};
    }
    @media screen and (min-width: 1200px) {
        font-size: ${(props) => props.$pcSize};
    }
`;

export const Text = { S1, S2, S3, S4, S5, S6 };
