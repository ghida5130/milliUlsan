import { useQuery } from "react-query";
import axios from "axios";

interface ThreeDaysWeatherDataProps {
    [key: string]: string;
}

const FetchThreeDaysWeatherData = async (): Promise<ThreeDaysWeatherDataProps[]> => {
    const { data } = await axios.get<ThreeDaysWeatherDataProps[]>(
        `http://175.215.254.39:5000/api/kmaWeather/threeDays`
    );
    return data;
};

const useFetchThreeDaysWeatherData = () => {
    const { data, error, isLoading } = useQuery<ThreeDaysWeatherDataProps[], Error>(
        ["threeDaysWeatherData"],
        () => FetchThreeDaysWeatherData(),
        {
            keepPreviousData: true,
        }
    );

    return { data, error, isLoading };
};

export default useFetchThreeDaysWeatherData;
