import { useQuery } from "react-query";
import axios from "axios";

type OpenWeatherType = Record<string, any>;

const OpenWeatherData = async () => {
    const { data } = await axios.get<OpenWeatherType>(`http://175.215.254.39:5000/api/openWeather`);
    return data;
};

const useOpenWeatherData = () => {
    const { data, error, isLoading } = useQuery<OpenWeatherType, Error>("openWeather", OpenWeatherData, {
        keepPreviousData: true,
    });

    return { data, error, isLoading };
};

export default useOpenWeatherData;
