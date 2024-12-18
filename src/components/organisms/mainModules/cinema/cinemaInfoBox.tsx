import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";

interface CinemaInfoProps {
    CinemaData: {
        [key: string]: string;
    };
}

export default function CinemaInfoBox({ CinemaData }: CinemaInfoProps): JSX.Element {
    return (
        <ActiveGlass
            onClick={() => {
                window.open(
                    `https://search.naver.com/search.naver?query=울산 ${CinemaData.구군명} ${CinemaData.상영관명}`
                );
            }}
        >
            <ContentArea>
                <Text.S3>{CinemaData.구군명}</Text.S3>

                <Text.S5
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                    }}
                    fontWeight="600"
                >
                    {CinemaData.상영관명}
                </Text.S5>
                <Text.S2>{CinemaData.소재지.split("(")[0].split(",")[0]}</Text.S2>
                <Text.S2>
                    {CinemaData.총스크린수}스크린, {CinemaData.총좌석수}석
                </Text.S2>
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
