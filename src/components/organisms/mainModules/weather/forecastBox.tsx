import useTodayWeatherData from "../../../../api/fetchtodayWeatherData";
import useThreeDaysWeatherData from "../../../../api/fetchThreeDaysWeatherData";

// components
import LoadingGlass from "../../../atoms/glass/loadingGlass";
import ErrorGlass from "../../../atoms/glass/errorGlass";
import GridGlass from "../../../atoms/glass/gridGlass";
import ForecastGlass from "../../../molecules/innerModules/weather/forecastGlass";

export default function ForecastBox() {
    const { data: todayData, error: todayError, isLoading: isTodayLoading } = useTodayWeatherData();
    const { data: threeDaysData, error: threeDaysError, isLoading: isThreeDaysLoading } = useThreeDaysWeatherData();

    if (todayError || threeDaysError) return <ErrorGlass row="2" column="2" message="날씨" />;
    if (isTodayLoading || isThreeDaysLoading || !todayData || !threeDaysData)
        return <LoadingGlass row="2" column="2" />;
    return (
        <GridGlass row="2" column="2">
            <ForecastGlass title="오늘의 일기예보" data={todayData} />
            <ForecastGlass title="3일간의 일기예보" data={threeDaysData} />
        </GridGlass>
    );
}
