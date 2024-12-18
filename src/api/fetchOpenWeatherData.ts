import { useQuery } from "react-query";
import axios from "axios";

type OpenWeatherType = Record<string, any>;

const OpenWeatherData = async () => {
    const { data } = await axios.get<OpenWeatherType>(`http://192.168.1.161:8080/api/openWeather`);
    return data;
};

const useOpenWeatherData = () => {
    const { data, error, isLoading } = useQuery<OpenWeatherType, Error>("openWeather", OpenWeatherData, {
        keepPreviousData: true,
    });

    return { data, error, isLoading };
};

export default useOpenWeatherData;
