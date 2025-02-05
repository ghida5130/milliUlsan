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
    const { data } = await axios.get<CinemaDataResponse>(
        `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/api/ulsanCinema?city=${city}`
    );
    console.log(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}`);
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
