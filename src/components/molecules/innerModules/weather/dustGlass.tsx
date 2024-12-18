import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import { Text } from "../../../../utils/constants/text";

interface DustProps {
    dustData: {
        [key: string]: string;
    };
}

export default function DustGlass({ dustData }: DustProps): JSX.Element {
    return (
        <>
            <Glass row="2">
                <Area>
                    <Text.S3 style={{ height: "35%" }}>미세먼지</Text.S3>
                    <StatusArea>
                        {Array.from({ length: 4 }).map((_, idx) => {
                            return (
                                <AlloArea key={`dustStatus ${idx}`}>
                                    <StatusCircle />
                                </AlloArea>
                            );
                        })}
                    </StatusArea>
                    <DataArea>
                        {Object.keys(dustData).map((val) => {
                            return (
                                <AlloArea key={val}>
                                    <Data>
                                        <Text.S1 style={{ marginTop: "10px" }}>{val}</Text.S1>
                                        <Text.S5 style={{ marginTop: "5px" }}>{dustData[val]}</Text.S5>
                                    </Data>
                                </AlloArea>
                            );
                        })}
                    </DataArea>
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
    padding: 20px;
`;

const AlloArea = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
`;

const StatusArea = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 25%;
    justify-content: space-between;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 1px;
        background-color: white; /* 선의 색상 */
        z-index: -1;
    }
`;

const DataArea = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 40%;
    justify-content: space-between;
    align-items: center;
`;

const Data = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StatusCircle = styled.div`
    width: 25%;
    aspect-ratio: 1/1;
    background: #4cff82;
    border-radius: 50%;
`;
