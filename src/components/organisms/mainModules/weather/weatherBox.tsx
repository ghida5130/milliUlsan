import useOpenWeatherData from "../../../../api/fetchOpenWeatherData";
import useDustData from "../../../../api/fetchDustData";

// components
import WeatherGridGlass from "../../../atoms/glass/weatherGridGlass";
import WeatherGlass from "../../../molecules/innerModules/weather/weatherGlass";
import WindGlass from "../../../molecules/innerModules/weather/windGlass";
import DustGlass from "../../../molecules/innerModules/weather/dustGlass";
import LoadingGlass from "../../../atoms/glass/loadingGlass";
import ErrorGlass from "../../../atoms/glass/errorGlass";

export default function WeatherBox() {
    const { data: openWeatherData, error: openWeatherError, isLoading: isOpenWeatherLoading } = useOpenWeatherData();
    const { data: dustData, error: dustError, isLoading: isDustLoading } = useDustData();

    if (openWeatherError || dustError) return <ErrorGlass row="2" column="2" message="날씨" />;
    if (isOpenWeatherLoading || isDustLoading || !openWeatherData || !dustData)
        return <LoadingGlass row="2" column="2" />;
    return (
        <WeatherGridGlass BackgroundImageUrl="images/sky.jpg">
            <WeatherGlass
                weatherIcon={openWeatherData.weather.icon as string}
                weatherStatus={openWeatherData.weather.description as string}
                nowTemp={openWeatherData.main.temp as number}
                feelTemp={openWeatherData.main.feels_like as number}
            />
            <WindGlass
                windDeg={openWeatherData.wind.deg as number}
                windSpeed={openWeatherData.wind.speed as number}
                rain={openWeatherData.rain["1h"] as number}
                humidity={openWeatherData.main.humidity as number}
            />
            <DustGlass dustData={dustData} />
        </WeatherGridGlass>
    );
}
