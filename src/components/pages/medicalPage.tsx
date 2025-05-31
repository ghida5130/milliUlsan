import useFetchMedicalData from "../../api/fetchMedicalData";
import { useRecoilValue } from "recoil";
import { medicalCategoryState, cityNameState } from "../../recoil/cityState";
import { debounce } from "../../utils/debounce";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Text } from "../../utils/constants/text";

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
    const [debouncedKeyword, setDebouncedKeyword] = useState(searchKeyword);
    // const filteredData = [];

    const { data, error, isLoading } = useFetchMedicalData({ city, category });

    const debounceSearch = useCallback(
        debounce((value: string) => {
            setDebouncedKeyword(value);
        }, 700),
        []
    );

    useEffect(() => {
        debounceSearch(searchKeyword);
    }, [searchKeyword, debounceSearch]);

    const filteredData = useMemo(() => {
        if (!data) return [];
        return data.filter((item) => item.소재지.includes(debouncedKeyword));
    }, [data, debouncedKeyword]);

    if (isLoading || !data) return <Text.S3>Medical Page Loading...</Text.S3>;
    if (error) return <Text.S3>Medical Page Error</Text.S3>;
    return (
        <PageGridArea>
            <MedicalFilterBox key="medicalFilterBox" />
            <MedicalSearchBox
                key="medicalSearchBox"
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
            />
            <MedicalTotalCountBox key="medicalTotalCountBox" medicalTotalCount={filteredData?.length} />
            {filteredData?.map((val) => {
                return <MedicalInfoBox key={val.의료기관명} MedicalData={val} />;
            })}
        </PageGridArea>
    );
}
