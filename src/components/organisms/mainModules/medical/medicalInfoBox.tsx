import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";

interface MedicalInfoProps {
    MedicalData: {
        [key: string]: string;
    };
}

export default function MedicalInfoBox({ MedicalData }: MedicalInfoProps): JSX.Element {
    return (
        <ActiveGlass
            onClick={() => {
                window.open(
                    `https://search.naver.com/search.naver?query=울산 ${MedicalData.구군} ${MedicalData.의료기관명}`
                );
            }}
        >
            <ContentArea>
                <Text.S3>
                    {MedicalData.구군}
                    <Text.S3 style={{ display: "inline" }}> {MedicalData.종별}</Text.S3>
                </Text.S3>

                <Text.S5
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                    }}
                    fontWeight="600"
                >
                    {MedicalData.의료기관명}
                </Text.S5>
                <Text.S2>{MedicalData.소재지.split("(")[0].split(",")[0]}</Text.S2>
                <Text.S2>{MedicalData.전화번호}</Text.S2>
            </ContentArea>
        </ActiveGlass>
    );
}

const ContentArea = styled.div`
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
