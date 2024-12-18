import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { cityNameState, CityNameStateType } from "../../../../recoil/cityState";

// components
import MiniBox from "../../../atoms/neumorphism/miniBox";
import Glass from "../../../atoms/glass/glass";

export default function CinemaFilterBox(): JSX.Element {
    const [city, setCity] = useRecoilState(cityNameState);

    const cityArr: CityNameStateType[] = ["북구", "남구", "동구", "중구", "울주군"];

    return (
        <Glass row="2">
            <MedicalFilterArea>
                {cityArr.map((a, i) => {
                    return (
                        <MiniBox
                            key={`setCinemaCityName ${i}`}
                            borderRadius="50%"
                            ratio="1/1"
                            onClick={() => {
                                setCity(a);
                            }}
                            isActive={city === a}
                        >
                            <Text.S2 style={{ whiteSpace: "nowrap" }}>{a}</Text.S2>
                        </MiniBox>
                    );
                })}
                <MiniBox row="5" ratio="5/1" isActive={true}>
                    영화관
                </MiniBox>
            </MedicalFilterArea>
        </Glass>
    );
}

const MedicalFilterArea = styled.div`
    padding: 15px;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
`;
