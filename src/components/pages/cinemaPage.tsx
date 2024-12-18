import useFetchCinemaData from "../../api/fetchCinemaData";
import { useRecoilValue } from "recoil";
import { cityNameState } from "../../recoil/cityState";
import { Text } from "../../utils/constants/text";

// components
import PageGridArea from "../atoms/base/pageGridArea";
import CinemaTotalCountBox from "../organisms/mainModules/cinema/CinemaTotalCountBox";
import CinemaInfoBox from "../organisms/mainModules/cinema/cinemaInfoBox";
import CinemaFilterBox from "../organisms/mainModules/cinema/cinemaFilterBox";

export default function CinemaPage(): JSX.Element {
    const city = useRecoilValue(cityNameState);
    const { data, error, isLoading } = useFetchCinemaData({ city });

    if (isLoading || !data) return <Text.S3>Cinema Page Loading...</Text.S3>;
    if (error) return <Text.S3>Cinema Page Error</Text.S3>;
    return (
        <PageGridArea>
            <CinemaFilterBox key="cinemaFilterBox" />
            <CinemaTotalCountBox cinemaTotalCount={data.length} key="cinemaTotalCountBox" />
            {data.map((val) => {
                return <CinemaInfoBox key={val.상영관명} CinemaData={val} />;
            })}
        </PageGridArea>
    );
}
