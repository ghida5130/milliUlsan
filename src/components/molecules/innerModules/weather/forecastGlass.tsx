import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import { Text } from "../../../../utils/constants/text";
import Image from "../../../atoms/base/Image";

interface ForecastGlassProps {
    title: string;
    data: fetchData[];
}

interface fetchData {
    [key: string]: string;
}

export default function ForecastGlass({ title, data }: ForecastGlassProps): JSX.Element {
    const arr = Array.from({ length: 10 }, (_, i) => i + 1);
    console.log(data);
    return (
        <>
            <Glass row="2">
                <Area>
                    <Text.S3 style={{ height: "25%" }}>{title}</Text.S3>
                    <ForecastArea>
                        <InnerArea />
                        {arr.map((_, idx) => {
                            const dataDate = data[idx * 3].fcstDate.slice(-2);
                            const dataTime = data[idx * 3].fcstTime.slice(0, 2);
                            const dataTemp = data[idx * 3].fcstValue;

                            return (
                                <Forecast key={idx}>
                                    <Text.S1 fontWeight="600">
                                        {dataDate}일 {dataTime}시
                                    </Text.S1>
                                    <Image src="/images/themeModeIcon/light.svg" alt="" width="45px"></Image>
                                    <Text.S4 fontWeight="600">{dataTemp}°</Text.S4>
                                </Forecast>
                            );
                        })}
                        <InnerArea />
                    </ForecastArea>
                </Area>
            </Glass>
        </>
    );
}

const Area = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px 0;
`;

const ForecastArea = styled.div`
    height: 75%;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    border-top: 1px solid grey;
    mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 3%,
        #000 10%,
        #000 80%,
        rgba(0, 0, 0, 0) 97%,
        rgba(0, 0, 0, 0)
    );
    -webkit-mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 3%,
        #000 10%,
        #000 80%,
        rgba(0, 0, 0, 0) 97%,
        rgba(0, 0, 0, 0)
    );

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const InnerArea = styled.div`
    flex: 0 0 5%;
`;

const Forecast = styled.div`
    height: 75%;
    display: flex;
    flex: 0 0 21%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
