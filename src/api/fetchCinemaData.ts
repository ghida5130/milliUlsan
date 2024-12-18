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
    const { data } = await axios.get<CinemaDataResponse>(`http://175.215.254.39:5000/api/ulsanCinema?city=${city}`);
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
