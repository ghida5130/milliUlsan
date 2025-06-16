// 테마, 레이아웃 등 글로벌 설정 및 스타일 관리
// 라우팅, 컨텍스트 관리

// external
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { themeState } from "./recoil/themeState";

//components
import Navbar from "./components/organisms/header/navbar";
import ThemeModeBtn from "./components/molecules/button/themeModeBtn";
import ScrollTopBtn from "./components/molecules/button/scrollTopBtn";
import Background from "./components/atoms/base/background";

//pages
import MainPage from "./components/pages/mainpage";
import WeatherPage from "./components/pages/weatherPage";
import FestivalPage from "./components/pages/festivalPage";
import MedicalPage from "./components/pages/medicalPage";
import CulturalFacilityPage from "./components/pages/culturalFacilityPage";
import CinemaPage from "./components/pages/cinemaPage";
import TestPage from "./components/pages/test";

//theme
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import MedicalTestPage from "./components/pages/medicalTestPage";

function App() {
    const userTheme = useRecoilValue(themeState);

    return (
        <ThemeProvider theme={userTheme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle theme={userTheme === "light" ? lightTheme : darkTheme} />
            <Background />
            <Navbar />
            <Wrap>
                <Suspense fallback={<div>loading...</div>}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/test" element={<TestPage />} />
                        <Route path="/weather" element={<WeatherPage />} />
                        <Route path="/festival" element={<FestivalPage />} />
                        <Route path="/medical" element={<MedicalPage />} />
                        <Route path="/culturalFacility" element={<CulturalFacilityPage />} />
                        <Route path="/cinema" element={<CinemaPage />} />
                        <Route path="/medicalTest" element={<MedicalTestPage />} />
                    </Routes>
                </Suspense>
            </Wrap>
            <div style={{ height: "500px" }}></div>
            <ScrollTopBtn />
            <ThemeModeBtn />
        </ThemeProvider>
    );
}

const Wrap = styled.div`
    padding-top: 100px;
    width: 90vw;
    margin: auto;
    max-width: 450px;
    /* min-width: 320px; */
    @media screen and (min-width: 768px) {
        width: 80vw;
        max-width: 700px;
        min-width: none;
    }
    @media screen and (min-width: 992px) {
        width: 80vw;
        max-width: none;
        min-width: none;
    }
    @media screen and (min-width: 1200px) {
        width: 70vw;
        max-width: 1150px;
        min-width: none;
    }
`;

export default App;
