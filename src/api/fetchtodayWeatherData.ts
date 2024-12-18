import { useQuery } from "react-query";
import axios from "axios";

interface TodayWeatherDataProps {
    [key: string]: string;
}

const FetchTodayWeatherData = async (): Promise<TodayWeatherDataProps[]> => {
    const { data } = await axios.get<TodayWeatherDataProps[]>(`http://175.215.254.39:5000/api/kmaWeather/today`);
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
