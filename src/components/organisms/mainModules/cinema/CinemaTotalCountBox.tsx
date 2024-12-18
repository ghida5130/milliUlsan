import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface CinemaTotalCountType {
    cinemaTotalCount?: number | undefined;
}

export default function CinemaTotalCountBox({ cinemaTotalCount }: CinemaTotalCountType): JSX.Element {
    const navigate = useNavigate();
    return (
        <ActiveGlass
            onClick={() => {
                navigate("/cinema");
            }}
        >
            <ContentArea>
                <Text.S4>총 영화관 수</Text.S4>
                <Text.S6>{cinemaTotalCount || "11"}개</Text.S6>
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
