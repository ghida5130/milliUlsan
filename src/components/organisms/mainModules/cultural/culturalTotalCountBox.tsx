import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useFetchCulturalData from "../../../../api/fetchCulturalData";

// components
import ActiveGlass from "../../../atoms/glass/activeGlass";
import ErrorGlass from "../../../atoms/glass/errorGlass";
import LoadingGlass from "../../../atoms/glass/loadingGlass";

export default function CulturalTotalCountBox(): JSX.Element {
    const navigate = useNavigate();
    const { data, error, isLoading } = useFetchCulturalData();

    if (error) return <ErrorGlass message="총 문화시설 수" />;
    if (isLoading) return <LoadingGlass />;
    return (
        <ActiveGlass
            onClick={() => {
                navigate("/culturalFacility");
            }}
        >
            <ContentArea>
                <Text.S4>총 문화시설 수</Text.S4>
                <Text.S6>{data?.length ? data.length : "0"}개</Text.S6>
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
