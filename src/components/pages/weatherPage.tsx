import PageGridArea from "../atoms/base/pageGridArea";
import useOpenWeatherData from "../../api/fetchOpenWeatherData";

// components
import WeatherBox from "../organisms/mainModules/weather/weatherBox";
import VisibilityBox from "../organisms/mainModules/weather/visibilityBox";
import PressureBox from "../organisms/mainModules/weather/pressureBox";
import CloudBox from "../organisms/mainModules/weather/cloudBox";
import { Text } from "../../utils/constants/text";
import ForecastBox from "../organisms/mainModules/weather/forecastBox";

export default function WeatherPage() {
    const { data, error, isLoading } = useOpenWeatherData();

    if (isLoading || !data) return <Text.S3>Weather Page Loading...</Text.S3>;
    if (error) return <Text.S3>Weather Page Error</Text.S3>;
    return (
        <PageGridArea>
            <WeatherBox />
            <ForecastBox key="forecastBox" />
            <VisibilityBox key="visibilityBox" distance={data.visibility as number} />
            <PressureBox key="pressureBox" sea={data.main.sea_level} grnd={data.main.grnd_level} />
            <CloudBox key="cloudBox" cloud={data.clouds.all as number} />
        </PageGridArea>
    );
}
