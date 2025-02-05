import { useQuery } from "react-query";
import axios from "axios";

interface TodayWeatherDataProps {
    [key: string]: string;
}

const FetchTodayWeatherData = async (): Promise<TodayWeatherDataProps[]> => {
    const { data } = await axios.get<TodayWeatherDataProps[]>(
        `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/api/kmaWeather/today`
    );
    return data;
};

const useFetchTodayWeatherData = () => {
    const { data, error, isLoading } = useQuery<TodayWeatherDataProps[], Error>(
        ["todayWeatherData"],
        () => FetchTodayWeatherData(),
        {
            keepPreviousData: true,
        }
    );

    return { data, error, isLoading };
};

export default useFetchTodayWeatherData;
