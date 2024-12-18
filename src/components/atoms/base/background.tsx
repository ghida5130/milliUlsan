// 배경의 색, 원형, blur, transition 효과 관리

import { useRecoilValue } from "recoil";
import { themeState } from "../../../recoil/themeState";
import styled from "styled-components";

export default function Background(): JSX.Element {
    const userTheme = useRecoilValue(themeState);
    return (
        <Base>
            <Circle
                key="backgroundSkyblueCircle"
                color="#46a0ca"
                $lightPosition={["-10%", "10%"]}
                $darkPosition={["50%", "-5%"]}
                $userTheme={userTheme}
            />
            <Circle
                key="backgroundPurpleCircle"
                color="#5841a8"
                $lightPosition={["-20%", "30%"]}
                $darkPosition={["40%", "45%"]}
                $userTheme={userTheme}
            />
            <Circle
                key="backgroundBlueCircle"
                color="#4456be"
                $lightPosition={["60%", "20%"]}
                $darkPosition={["15%", "20%"]}
                $userTheme={userTheme}
            />
            <Blur $userTheme={userTheme} />
        </Base>
    );
}

const Base = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -3;
`;

const Blur = styled.div<{ $userTheme: string }>`
    width: 100%;
    height: 100%;
    background: ${({ $userTheme }) => ($userTheme === "light" ? "rgb(255, 255, 255, 0.4)" : "rgb(0, 0, 0, 0.4)")};
    z-index: -10;
    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    transition: background-color 1s ease;
`;

const Circle = styled.div<{
    color: string;
    $lightPosition: [string, string];
    $darkPosition: [string, string];
    $userTheme: string;
}>`
    position: fixed;
    top: ${({ $userTheme, $darkPosition, $lightPosition }) =>
        $userTheme === "light" ? $lightPosition[0] : $darkPosition[0]};
    left: ${({ $userTheme, $darkPosition, $lightPosition }) =>
        $userTheme === "light" ? $lightPosition[1] : $darkPosition[1]};
    width: 50vw;
    min-width: 400px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: ${({ color }) => color || "white"};
    transition: background-color 0.5s ease, top 0.5s ease, left 0.5s ease;
    z-index: -11;
`;
