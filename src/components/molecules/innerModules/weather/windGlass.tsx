import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import Image from "../../../atoms/base/Image";
import { Text } from "../../../../utils/constants/text";

interface WindProps {
    windDeg: number;
    windSpeed: number;
    rain: number;
    humidity: number;
}

export default function WindGlass({ windDeg, windSpeed, rain, humidity }: WindProps): JSX.Element {
    function getWindDirection(degree: number): string {
        if (degree >= 337.5 || degree < 22.5) return "북";
        if (degree >= 22.5 && degree < 67.5) return "북동";
        if (degree >= 67.5 && degree < 112.5) return "동";
        if (degree >= 112.5 && degree < 157.5) return "남동";
        if (degree >= 157.5 && degree < 202.5) return "남";
        if (degree >= 202.5 && degree < 247.5) return "남서";
        if (degree >= 247.5 && degree < 292.5) return "서";
        if (degree >= 292.5 && degree < 337.5) return "북서";
        return "error";
    }

    return (
        <>
            <Glass>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
                    <WindInfo>
                        <Image
                            style={{ transform: `rotate(${windDeg + 90}deg)` }}
                            src="images/weatherIcon/windDirection.svg"
                            alt=""
                            width="20%"
                        />
                        <div>
                            <div style={{ marginBottom: "5px" }}>
                                <Text.S1 style={{ marginRight: "5px" }}>풍향</Text.S1>
                                <Text.S4>{getWindDirection(windDeg)}풍</Text.S4>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <Text.S1 style={{ marginRight: "5px" }}>풍속</Text.S1>
                                <Text.S4>
                                    {windSpeed}
                                    <Text.S1>m/s</Text.S1>
                                </Text.S4>
                            </div>
                        </div>
                    </WindInfo>
                    <WindMoreInfo>
                        <div>
                            <Text.S1>강수량</Text.S1>
                            <br />
                            <Text.S4 style={{ marginTop: "5px" }}>
                                {rain}
                                <Text.S1>mm</Text.S1>
                            </Text.S4>
                        </div>
                        <div>
                            <Text.S1>현재 습도</Text.S1>
                            <br />
                            <Text.S4 style={{ marginTop: "5px" }}>
                                {humidity}
                                <Text.S1>%</Text.S1>
                            </Text.S4>
                        </div>
                    </WindMoreInfo>
                </div>
            </Glass>
        </>
    );
}

const WindInfo = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const WindMoreInfo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
