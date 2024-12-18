import ActiveGlass from "../../../atoms/glass/activeGlass";
import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";
import useFetchFestivalImage from "../../../../api/fetchFestivalImage";

interface FestivalDataTypes {
    festivalData: {
        [key: string]: string;
    };
}

export default function FestivalInfoBox({ festivalData }: FestivalDataTypes): JSX.Element {
    const unqId = Number(festivalData.unqId[0]);

    const { data, error, isLoading } = useFetchFestivalImage(unqId);

    const renderContent = () => {
        if (error) return <Text.S2>축제 데이터 에러</Text.S2>;
        if (isLoading) return <Text.S2>축제 데이터 로딩 중</Text.S2>;
        return (
            <>
                <Text.S3 style={{ height: "20%", alignSelf: "flex-start" }}>{festivalData.sggNm[0]}</Text.S3>
                <Text.S5
                    style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                        height: "30%",
                    }}
                    fontWeight="600"
                >
                    {festivalData.title[0]}
                </Text.S5>
                <Text.S2 style={{ height: "40%" }}>{festivalData.intr[0]}</Text.S2>
                <Text.S3>{festivalData.fstvlBgngYmd[0]}</Text.S3>
            </>
        );
    };

    if (error) return <div>error</div>;
    if (isLoading) return <div>loading</div>;
    return (
        <ActiveGlass BackgroundImageUrl={data?.data} BackgroundBlur="5px" BackgroundColorBlur="0.8">
            <ContentArea>{renderContent()}</ContentArea>
        </ActiveGlass>
    );
}

const ContentArea = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-evenly; */
    padding: 15px;
`;
