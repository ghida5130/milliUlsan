import { useQuery } from "react-query";
import axios from "axios";

interface ThreeDaysWeatherDataProps {
    [key: string]: string;
}

const FetchThreeDaysWeatherData = async (): Promise<ThreeDaysWeatherDataProps[]> => {
    const { data } = await axios.get<ThreeDaysWeatherDataProps[]>(
        `${process.env.REACT_APP_SERVER_URL}/api/kmaWeather/threeDays`
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
