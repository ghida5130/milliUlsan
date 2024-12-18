import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";

interface CulturalInfoProps {
    CulturalData: {
        [key: string]: string[];
    };
}

export default function CulturalInfoBox({ CulturalData }: CulturalInfoProps): JSX.Element {
    let homepageUrl =
        CulturalData.homepage[0].length > 0
            ? CulturalData.homepage[0].startsWith("http")
                ? CulturalData.homepage[0]
                : "http://" + CulturalData.homepage[0]
            : `https://search.naver.com/search.naver?query=울산 ${CulturalData.facility}`;
    return (
        <ActiveGlass
            onClick={() => {
                window.open(`${homepageUrl}`);
            }}
        >
            <ContentArea>
                <Text.S3>{CulturalData.category}</Text.S3>
                <Text.S5
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                    }}
                    fontWeight="600"
                >
                    {CulturalData.facility}
                </Text.S5>
                <Text.S2>{CulturalData.address[0].split("(")[0].split(",")[0]}</Text.S2>
                <Text.S2>{CulturalData.phoneNumber}</Text.S2>
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
