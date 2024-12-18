import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import { Text } from "../../../../utils/constants/text";

export default function NowDateGlass(): JSX.Element {
    const today = new Date();
    const daysInKorean = ["일", "월", "화", "수", "목", "금", "토"];

    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const date = today.getDate().toString().padStart(2, "0");
    const intHour = today.getHours();
    const hours = today.getHours().toString().padStart(2, "0");
    const minutes = today.getMinutes().toString().padStart(2, "0");

    const nowDate = `${year}-${month}-${date}`;
    const time = hours + ":" + minutes;
    const dayOfWeek = daysInKorean[today.getDay()];

    return (
        <>
            <Glass>
                <ContentArea>
                    <div>
                        <Text.S3>{nowDate}</Text.S3>
                        <br />
                        <Text.S2 style={{ marginTop: "10px" }}>{dayOfWeek}요일</Text.S2>
                    </div>
                    <Text.S6>
                        <Text.S4>{intHour >= 0 && intHour <= 12 ? "오전 " : "오후 "}</Text.S4>
                        {time}
                    </Text.S6>
                </ContentArea>
            </Glass>
        </>
    );
}

const ContentArea = styled.div`
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
