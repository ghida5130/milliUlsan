import { useQuery } from "react-query";
import axios from "axios";

interface FestivalData {
    [key: string]: string[];
}

type FestivalDataProps = FestivalData[];

const FetchCulturalData = async (): Promise<FestivalDataProps> => {
    const { data } = await axios.get<FestivalDataProps>(`http://192.168.1.161:8080/api/ulsanCultural`);
    return data;
};

const useFetchCulturalData = () => {
    const { data, error, isLoading } = useQuery<FestivalDataProps, Error>("cultural", FetchCulturalData, {
        keepPreviousData: true,
    });

    return { data, error, isLoading };
};

export default useFetchCulturalData;
