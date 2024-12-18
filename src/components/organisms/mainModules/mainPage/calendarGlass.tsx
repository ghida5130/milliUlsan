import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import { Text } from "../../../../utils/constants/text";
import { useRecoilValue } from "recoil";
import { themeState } from "../../../../recoil/themeState";

export default function CalendarGlass(): JSX.Element {
    const userTheme = useRecoilValue(themeState);
    let today = new Date();
    const date = today.getDate();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");

    const dayArr = ["일", "월", "화", "수", "목", "금", "토"];
    const dateArr = Array.from({ length: 42 }, (_, i) => i + 1);

    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay(); // 이번 달 1일의 요일을 0~6으로 반환. 0은 일요일.
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); // 이번 달의 마지막날이 몇일인지 반환.
    const lastDayOfPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // 지난 달의 마지막날이 몇일인지 반환.

    for (let i = 0; i < lastDayOfMonth; i++) {
        // 이번 달의 1일부터 마지막날까지 숫자 채우기
        dateArr[i + firstDayOfMonth] = i + 1;
    }
    for (let j = 0; j < firstDayOfMonth; j++) {
        // 지난 달의 날짜 채우기
        dateArr[j] = lastDayOfPrevMonth - (firstDayOfMonth - j - 1);
    }
    for (let k = lastDayOfMonth + firstDayOfMonth; k < 42; k++) {
        // 다음 달의 날짜 채우기
        dateArr[k] = k - (lastDayOfMonth + firstDayOfMonth) + 1;
    }

    return (
        <>
            <Glass row="2" column="2">
                <ContentArea>
                    <MonthArea>
                        <Text.S6>{month}월</Text.S6>
                    </MonthArea>
                    <CalendarArea>
                        {dayArr.map((val, idx) => {
                            let color = userTheme === "light" ? "black" : "white";
                            if (idx === 0) color = "#ff3838";
                            else if (idx === 6) color = "#00a3e4";
                            return (
                                <Day key={`nowMonthDay ${idx}`}>
                                    <Text.S4 style={{ color: color }} fontWeight="600">
                                        {val}
                                    </Text.S4>
                                </Day>
                            );
                        })}
                        {dateArr.map((val, idx) => {
                            let color = userTheme === "light" ? "black" : "white";
                            if (idx % 7 === 0) color = "#ff3838";
                            if (idx % 7 === 6) color = "#00a3e4";

                            let isDateToday = false;
                            // 지난달, 다음달에서 isDateToday가 true가 되지않도록 필터링
                            if (idx >= firstDayOfMonth && idx < firstDayOfMonth + lastDayOfMonth && date === val)
                                isDateToday = true; // 현재 인덱스와 오늘 날짜를 비교하여 같으면 isDateToday를 true로 변경
                            return (
                                <DateNumber
                                    $isDateToday={isDateToday}
                                    $userTheme={userTheme}
                                    key={`nowMonthDate ${idx}`}
                                >
                                    <Text.S4 style={{ color: color }}>{val}</Text.S4>
                                </DateNumber>
                            );
                        })}
                    </CalendarArea>
                </ContentArea>
            </Glass>
        </>
    );
}

const ContentArea = styled.div`
    padding: 30px;
    height: 100%;
`;

const MonthArea = styled.div`
    height: 15%;
`;

const CalendarArea = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    grid-template-rows: repeat(7, minmax(0, 1fr));
    grid-row-gap: 1rem;
    padding: 5px;
    height: 85%;
`;

const Day = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DateNumber = styled.span<{ $isDateToday: boolean; $userTheme: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6px;
    border-radius: 10px;

    ${({ $isDateToday, $userTheme }) =>
        $isDateToday &&
        `
        outline: ${$userTheme === "light" ? "#666666" : "#cacaca"} 3px solid;
        background-color: ${$userTheme === "light" ? "rgb(90, 90, 90, 0.2)" : "rgb(202, 202, 202, 0.2)"};
    `}
`;
