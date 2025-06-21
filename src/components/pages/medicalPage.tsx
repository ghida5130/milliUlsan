import useFetchMedicalData from "../../api/fetchMedicalData";
import { useRecoilValue } from "recoil";
import { medicalCategoryState, cityNameState } from "../../recoil/cityState";
import { useEffect, useState } from "react";
import { Text } from "../../utils/constants/text";
import { useFilterWorker } from "../../hooks/useFilterWorker";
import { MedicalDataTypes } from "../../api/fetchMedicalData";

// components
import PageGridArea from "../atoms/base/pageGridArea";
import MedicalTotalCountBox from "../organisms/mainModules/medical/medicalTotalCountBox";
import MedicalInfoBox from "../organisms/mainModules/medical/medicalInfoBox";
import MedicalFilterBox from "../organisms/mainModules/medical/medicalFilterBox";
import MedicalSearchBox from "../organisms/mainModules/medical/medicalSearchBox";

export default function MedicalPage(): JSX.Element {
    const city = useRecoilValue(cityNameState);
    const category = useRecoilValue(medicalCategoryState);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filteredData, setFilteredData] = useState<MedicalDataTypes[]>([]);

    const { data, error, isLoading } = useFetchMedicalData({ city, category });

    const { postFilterData } = useFilterWorker();

    useEffect(() => {
        if (!data) return;
        postFilterData(data, searchKeyword, setFilteredData);
    }, [data, searchKeyword, postFilterData]);

    if (isLoading || !data) return <Text.S3>Medical Page Loading...</Text.S3>;
    if (error) return <Text.S3>Medical Page Error</Text.S3>;
    return (
        <>
            <PageGridArea>
                <MedicalFilterBox key="medicalFilterBox" />
                <MedicalSearchBox key="medicalSearchBox" setSearchKeyword={setSearchKeyword} />
                <MedicalTotalCountBox key="medicalTotalCountBox" medicalTotalCount={filteredData?.length} />
                {filteredData?.map((val) => {
                    return <MedicalInfoBox key={val.의료기관명} MedicalData={val} />;
                })}
            </PageGridArea>
        </>
    );
}
