import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";

interface CloudProps {
    cloud: number;
}

export default function CloudBox({ cloud }: CloudProps): JSX.Element {
    return (
        <ActiveGlass>
            <ContentArea>
                <Text.S3 fontWeight="600">구름</Text.S3>
                <Text.S6>
                    {cloud}
                    <Text.S1>%</Text.S1>
                </Text.S6>
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
