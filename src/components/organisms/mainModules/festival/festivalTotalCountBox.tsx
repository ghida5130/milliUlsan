import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useFetchFestivalData from "../../../../api/fetchFestivalData";

// components
import ActiveGlass from "../../../atoms/glass/activeGlass";
import LoadingGlass from "../../../atoms/glass/loadingGlass";
import ErrorGlass from "../../../atoms/glass/errorGlass";

export default function FestivalTotalCountBox(): JSX.Element {
    const navigate = useNavigate();
    const nowMonth = new Date().getMonth() + 1;
    const { data, error, isLoading } = useFetchFestivalData(nowMonth);

    if (error) return <ErrorGlass message={`${nowMonth}월의 축제`} />;
    if (isLoading) return <LoadingGlass />;
    return (
        <ActiveGlass
            onClick={() => {
                navigate("/festival");
            }}
        >
            <ContentArea>
                <Text.S4>{nowMonth}월의 축제</Text.S4>
                <Text.S6>{data ? data.totalCount : " - "}개</Text.S6>
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
