import useFetchFestivalData from "../../api/fetchFestivalData";
import { Text } from "../../utils/constants/text";

// components
import PageGridArea from "../atoms/base/pageGridArea";
import FestivalTotalCountBox from "../organisms/mainModules/festival/festivalTotalCountBox";
import FestivalInfoBox from "../organisms/mainModules/festival/festivalInfoBox";

export default function FestivalPage(): JSX.Element {
    const nowMonth = new Date().getMonth() + 1;
    const { data, error, isLoading } = useFetchFestivalData(nowMonth);

    const festivalData = data?.data;

    if (isLoading || !data) return <Text.S3>Festival Page Loading...</Text.S3>;
    if (error) return <Text.S3>Festival Page Error</Text.S3>;
    return (
        <PageGridArea>
            <FestivalTotalCountBox />
            {festivalData?.map((val) => {
                return <FestivalInfoBox key={val.title[0]} festivalData={val} />;
            })}
        </PageGridArea>
    );
}
