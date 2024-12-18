import { useQuery } from "react-query";
import axios from "axios";

interface FetchCinemaDataProps {
    city: string;
}

interface CinemaDataProps {
    [key: string]: string;
}

type CinemaDataResponse = CinemaDataProps[];

const FetchCinemaData = async ({ city = "북구" }: FetchCinemaDataProps): Promise<CinemaDataResponse> => {
    const { data } = await axios.get<CinemaDataResponse>(`http://192.168.1.161:8080/api/ulsanCinema?city=${city}`);
    return data;
};

const useFetchCinemaData = ({ city }: FetchCinemaDataProps) => {
    const { data, error, isLoading } = useQuery<CinemaDataResponse, Error>(
        ["cinema", city],
        () => FetchCinemaData({ city }),
        { keepPreviousData: true }
    );

    return { data, error, isLoading };
};

export default useFetchCinemaData;
