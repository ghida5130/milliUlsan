import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";

interface PressureProps {
    sea: number;
    grnd: number;
}

export default function PressureBox({ sea, grnd }: PressureProps): JSX.Element {
    return (
        <ActiveGlass>
            <ContentArea>
                <Text.S3 fontWeight="600">기압</Text.S3>
                <Text.S6>
                    <Text.S1>(해수면)</Text.S1>
                    {sea}
                    <Text.S1>hPa</Text.S1>
                </Text.S6>
                <Text.S6>
                    <Text.S1>(지면)</Text.S1>
                    {grnd}
                    <Text.S1>hPa</Text.S1>
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
