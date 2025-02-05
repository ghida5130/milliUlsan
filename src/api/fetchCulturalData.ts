import { useQuery } from "react-query";
import axios from "axios";

interface FestivalData {
    [key: string]: string[];
}

type FestivalDataProps = FestivalData[];

const FetchCulturalData = async (): Promise<FestivalDataProps> => {
    const { data } = await axios.get<FestivalDataProps>(
        `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/api/ulsanCultural`
    );
    return data;
};

const useFetchCulturalData = () => {
    const { data, error, isLoading } = useQuery<FestivalDataProps, Error>("cultural", FetchCulturalData, {
        keepPreviousData: true,
    });

    return { data, error, isLoading };
};

export default useFetchCulturalData;
