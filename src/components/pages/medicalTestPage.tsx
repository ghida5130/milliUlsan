import useFetchMedicalData from "../../api/fetchMedicalData";
import { useRecoilValue } from "recoil";
import { medicalCategoryState, cityNameState } from "../../recoil/cityState";
import { useState } from "react";
import { Text } from "../../utils/constants/text";

// components
import PageGridArea from "../atoms/base/pageGridArea";
import MedicalTotalCountBox from "../organisms/mainModules/medical/medicalTotalCountBox";
import MedicalInfoBox from "../organisms/mainModules/medical/medicalInfoBox";
import MedicalFilterBox from "../organisms/mainModules/medical/medicalFilterBox";
import MedicalSearchBox from "../organisms/mainModules/medical/medicalSearchBox";

export default function MedicalTestPage(): JSX.Element {
    const city = useRecoilValue(cityNameState);
    const category = useRecoilValue(medicalCategoryState);
    const [searchKeyword, setSearchKeyword] = useState("");

    const { data, error, isLoading } = useFetchMedicalData({ city, category });

    if (isLoading || !data) return <Text.S3>Medical Page Loading...</Text.S3>;
    if (error) return <Text.S3>Medical Page Error</Text.S3>;

    const filteredData = data.filter((item) => item.소재지.includes(searchKeyword));

    return (
        <PageGridArea>
            <MedicalFilterBox key="medicalFilterBox" />
            <MedicalSearchBox key="medicalSearchBox" setSearchKeyword={setSearchKeyword} />
            <MedicalTotalCountBox key="medicalTotalCountBox" medicalTotalCount={filteredData.length} />
            {filteredData.map((val) => (
                <MedicalInfoBox key={val.의료기관명} MedicalData={val} />
            ))}
        </PageGridArea>
    );
}
