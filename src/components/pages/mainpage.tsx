// 메인 페이지

import { useState, useEffect, useMemo } from "react";

// Grid
import PageGridArea from "../atoms/base/pageGridArea";

// components (module)
import WeatherBox from "../organisms/mainModules/weather/weatherBox";
import FestivalTotalCountBox from "../organisms/mainModules/festival/festivalTotalCountBox";
import MedicalTotalCountBox from "../organisms/mainModules/medical/medicalTotalCountBox";
import CulturalTotalCountBox from "../organisms/mainModules/cultural/culturalTotalCountBox";
import NowDateGlass from "../organisms/mainModules/mainPage/nowDateGlass";
import ClockGlass from "../organisms/mainModules/mainPage/clockGlass";
import CalendarGlass from "../organisms/mainModules/mainPage/calendarGlass";
import LinkGlass from "../organisms/mainModules/mainPage/LinkGlass";
import TodayDateGlass from "../organisms/mainModules/mainPage/todayDateGlass";
import CinemaTotalCountBox from "../organisms/mainModules/cinema/CinemaTotalCountBox";
import ForecastBox from "../organisms/mainModules/weather/forecastBox";

// components (function)
import MainPageModuleFilterBox from "../organisms/mainModules/mainPageModuleFilterBox";
import MainPageFilterBtn from "../molecules/button/mainPageFilterBtn";

export default function MainPage() {
    const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
    const [isActiveModule, setIsActiveModule] = useState<any>();

    const componentMap = useMemo(
        () => ({
            weather: WeatherBox,
            festival: FestivalTotalCountBox,
            medical: MedicalTotalCountBox,
            cultural: CulturalTotalCountBox,
            nowDate: NowDateGlass,
            clock: ClockGlass,
            calendar: CalendarGlass,
            link: LinkGlass,
            todayDate: TodayDateGlass,
            cinema: CinemaTotalCountBox,
            forecast: ForecastBox,
        }),
        []
    );
    type ComponentKey = keyof typeof componentMap;

    // 로컬스토리지에서 활성화 컴포넌트 목록 불러오기 (없을경우 초기값 리턴)
    const getInitialComponents = (): React.FC[] => {
        const savedComponents = localStorage.getItem("activeComponents");
        if (savedComponents) {
            const parsedKeys: ComponentKey[] = JSON.parse(savedComponents);
            return parsedKeys.map((key) => componentMap[key]);
        }
        return [
            // 초기 접속시 표시할 컴포넌트 목록
            WeatherBox,
            CalendarGlass,
            NowDateGlass,
            TodayDateGlass,
            ForecastBox,
            FestivalTotalCountBox,
            MedicalTotalCountBox,
            CulturalTotalCountBox,
            CinemaTotalCountBox,
            LinkGlass,
            ClockGlass,
        ];
    };

    // 로컬스토리지에서 가져온 컴포넌트 목록을 state에 저장한뒤 사용자 상호작용에 따라 값을 수정
    const [nowComponents, setNowComponents] = useState<React.FC[]>(getInitialComponents);

    // 사용자 상호작용에 의해 nowComponents state가 변경되면 로컬스토리지에 변경된 값을 저장
    useEffect(() => {
        const componentKeys = nowComponents.map(
            (Component) =>
                Object.keys(componentMap).find((key) => componentMap[key as ComponentKey] === Component) as ComponentKey
        );
        localStorage.setItem("activeComponents", JSON.stringify(componentKeys));
        setIsActiveModule(componentKeys);
    }, [nowComponents, componentMap]);

    const toggleComponent = (componentKey: ComponentKey) => {
        const Component = componentMap[componentKey];
        setNowComponents((prevComponents) => {
            const hasComponent = prevComponents.includes(Component);
            if (hasComponent) {
                return prevComponents.filter((item) => item !== Component);
            } else {
                return [...prevComponents, Component];
            }
        });
    };

    return (
        <>
            <PageGridArea>
                {nowComponents.map((Component, index) => {
                    return Component ? <Component key={Component.name || index} /> : null;
                })}
            </PageGridArea>
            <MainPageModuleFilterBox
                isFilterActive={isFilterActive}
                setIsFilterActive={setIsFilterActive}
                toggleComponent={toggleComponent}
                isActiveModule={isActiveModule}
            />
            <MainPageFilterBtn setIsFilterActive={setIsFilterActive} />
        </>
    );
}
