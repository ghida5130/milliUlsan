import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import { Text } from "../../../../utils/constants/text";

export default function TodayDateGlass(): JSX.Element {
    const today = new Date();
    const daysInKorean = ["일", "월", "화", "수", "목", "금", "토"];

    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const date = today.getDate().toString().padStart(2, "0");
    const dayOfWeek = daysInKorean[today.getDay()];

    return (
        <>
            <Glass>
                <ContentArea>
                    <Text.S3>{`${month}월 ${date}일`}</Text.S3>
                    <Text.S6>{dayOfWeek}요일</Text.S6>
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
