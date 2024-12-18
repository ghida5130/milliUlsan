import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";

interface VisibilityProps {
    distance: number;
}

export default function VisibilityBox({ distance }: VisibilityProps): JSX.Element {
    let calcDistance = distance >= 1000 ? distance / 1000 : distance;
    return (
        <ActiveGlass>
            <ContentArea>
                <Text.S3 fontWeight="600">가시성</Text.S3>
                <Text.S6>
                    {calcDistance}
                    <Text.S2>{distance === 10000 ? "(최대거리)" : ""}</Text.S2>
                </Text.S6>
                <Text.S3>{distance >= 1000 ? "km" : "m"}</Text.S3>
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
