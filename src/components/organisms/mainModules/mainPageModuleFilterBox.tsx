import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../recoil/themeState";

// components
import Image from "../../atoms/base/Image";
import MiniBox from "../../atoms/neumorphism/miniBox";
import { Text } from "../../../utils/constants/text";

interface MainPageModuleFilterBoxProps {
    isFilterActive: boolean;
    setIsFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
    toggleComponent: any;
    isActiveModule: any;
}

export default function MainPageModuleFilterBox({
    isFilterActive,
    setIsFilterActive,
    toggleComponent,
    isActiveModule = [],
}: MainPageModuleFilterBoxProps): JSX.Element {
    const userTheme = useRecoilValue(themeState);

    const module1to1InfoText = ["축제", "병원", "문화", "영화관"];
    const module1to1FunctionText = ["시계", "시간", "요일", "링크"];
    const module2to2Text = ["날씨정보", "달력", "일기예보"];

    const module1to1InfoName = ["festival", "medical", "cultural", "cinema"];
    const module1to1FunctionName = ["clock", "nowDate", "todayDate", "link"];
    const module2to2Name = ["weather", "calendar", "forecast"];

    return (
        <Wrap $isFilterActive={isFilterActive}>
            <OpenBtn
                onClick={() => {
                    setIsFilterActive(!isFilterActive);
                }}
            >
                <Image
                    src="/images/cross.svg"
                    alt=""
                    width="20px"
                    style={{
                        filter: `brightness(${userTheme === "light" ? "0%" : "100%"})`,
                        transition: "filter 0.5s ease",
                        marginRight: "5px",
                    }}
                ></Image>
                <Text.S3 fontWeight="600">닫기</Text.S3>
            </OpenBtn>
            <Text.S5 style={{ alignSelf: "center", marginBottom: "20px", marginTop: "10px" }}>1x1 정보</Text.S5>
            <FilterArea $isFilterActive={isFilterActive}>
                {module1to1InfoText.map((val, idx) => {
                    return (
                        <MiniBox
                            ratio="1/1"
                            onClick={() => {
                                toggleComponent(module1to1InfoName[idx]);
                            }}
                            key={val}
                            isActive={isActiveModule.includes(module1to1InfoName[idx])}
                        >
                            <Text.S3>{val}</Text.S3>
                        </MiniBox>
                    );
                })}
            </FilterArea>
            <Text.S5 style={{ alignSelf: "center", marginBottom: "20px", marginTop: "10px" }}>1x1 기능</Text.S5>
            <FilterArea $isFilterActive={isFilterActive}>
                {module1to1FunctionText.map((val, idx) => {
                    return (
                        <MiniBox
                            ratio="1/1"
                            onClick={() => {
                                toggleComponent(module1to1FunctionName[idx]);
                            }}
                            key={val}
                            isActive={isActiveModule.includes(module1to1FunctionName[idx])}
                        >
                            <Text.S3>{val}</Text.S3>
                        </MiniBox>
                    );
                })}
            </FilterArea>
            <Text.S5 style={{ alignSelf: "center", marginBottom: "20px", marginTop: "10px" }}>2x2 모듈</Text.S5>
            <FilterArea $isFilterActive={isFilterActive}>
                {module2to2Text.map((val, idx) => {
                    return (
                        <MiniBox
                            row="2"
                            column="2"
                            onClick={() => {
                                toggleComponent(module2to2Name[idx]);
                            }}
                            key={val}
                            isActive={isActiveModule.includes(module2to2Name[idx])}
                        >
                            <Text.S4>{val}</Text.S4>
                        </MiniBox>
                    );
                })}
            </FilterArea>
        </Wrap>
    );
}

const Wrap = styled.div<{ $isFilterActive: boolean }>`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: ${({ $isFilterActive }) => ($isFilterActive ? "0" : "-60%")};
    left: 50%;
    height: 60%;
    overflow-y: auto;
    background-color: ${({ theme }) => (theme.mode === "light" ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)")};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transform: translateX(-50%);
    z-index: 9999;
    transition: left 0.5s ease, bottom 0.5s ease;
`;

const FilterArea = styled.div<{ $isFilterActive: boolean }>`
    width: 100vw;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-bottom: 30px;
    gap: 30px;
    @media screen and (min-width: 576px) {
        padding: 0 40px;
        grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    @media screen and (min-width: 992px) {
        padding: 0 100px;
        grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    @media screen and (min-width: 1200px) {
        padding: 0 150px;
        grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    @media screen and (min-width: 1550px) {
        padding: 0 200px;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-template-rows: auto;
    }
`;

const OpenBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;
