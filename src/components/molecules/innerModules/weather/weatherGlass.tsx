import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import Image from "../../../atoms/base/Image";
import { Text } from "../../../../utils/constants/text";

interface WeatherProps {
    weatherIcon: string;
    weatherStatus: string;
    nowTemp: number;
    feelTemp: number;
}

export default function WeatherGlass({ weatherIcon, weatherStatus, nowTemp, feelTemp }: WeatherProps): JSX.Element {
    return (
        <>
            <Glass>
                <WeatherCondition>
                    <Image
                        src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
                        alt=""
                        width="40%"
                        style={{ transform: "scale(180%)" }}
                    />
                    <Text.S5>{weatherStatus}</Text.S5>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
                        <div>
                            <Text.S1>현재 온도</Text.S1>
                            <br />
                            <Text.S4 style={{ marginTop: "5px" }}>{nowTemp}°</Text.S4>
                        </div>
                        <div>
                            <Text.S1>체감 온도</Text.S1>
                            <br />
                            <Text.S4 style={{ marginTop: "5px" }}>{feelTemp}°</Text.S4>
                        </div>
                    </div>
                </WeatherCondition>
            </Glass>
        </>
    );
}

const WeatherCondition = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
