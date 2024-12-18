import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface MedicalTotalCountProps {
    medicalTotalCount?: number | undefined;
}

export default function MedicalTotalCountBox({ medicalTotalCount }: MedicalTotalCountProps): JSX.Element {
    const navigate = useNavigate();
    return (
        <ActiveGlass
            onClick={() => {
                navigate("/medical");
            }}
        >
            <ContentArea>
                <Text.S4>총 병원 수</Text.S4>
                <Text.S6>{medicalTotalCount ? medicalTotalCount : "1401"}개</Text.S6>
            </ContentArea>
        </ActiveGlass>
    );
}

const ContentArea = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
