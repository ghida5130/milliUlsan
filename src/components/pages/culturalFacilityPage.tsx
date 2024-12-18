import useFetchCulturalData from "../../api/fetchCulturalData";
import { Text } from "../../utils/constants/text";

// components
import PageGridArea from "../atoms/base/pageGridArea";
import CulturalTotalCountBox from "../organisms/mainModules/cultural/culturalTotalCountBox";
import CulturalInfoBox from "../organisms/mainModules/cultural/culturalInfoBox";

export default function CulturalFacilityPage(): JSX.Element {
    const { data, error, isLoading } = useFetchCulturalData();

    if (isLoading || !data) return <Text.S3>Cultural Page Loading...</Text.S3>;
    if (error) return <Text.S3>Cultural Page Error</Text.S3>;
    return (
        <PageGridArea>
            <CulturalTotalCountBox />
            {data.map((val) => {
                return <CulturalInfoBox key={val.facility[0]} CulturalData={val} />;
            })}
        </PageGridArea>
    );
}
