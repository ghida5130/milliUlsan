import React, { useEffect } from "react";
import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";

// Helper Functions
const getSecondsToday = (): number => {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now.getTime() - today.getTime();
    return Math.round(diff / 1000);
};

// Clock Component
const ClockGlass: React.FC = () => {
    useEffect(() => {
        const currentSec = getSecondsToday();

        // const seconds = (currentSec / 60) % 1;
        const minutes = (currentSec / 3600) % 1;
        const hours = (currentSec / 43200) % 1;

        // setTime(60 * seconds, "second");
        setTime(3600 * minutes, "minute");
        setTime(43200 * hours, "hour");
    }, []);

    const setTime = (left: number, hand: string) => {
        const handElement = document.querySelector(`.clock__${hand}`) as HTMLElement;
        if (handElement) {
            handElement.style.animationDelay = `${left * -1}s`;
        }
    };

    return (
        <>
            <Glass>
                <style>{keyframes}</style>
                <ClockContainer>
                    {/* <ClockHand $handType="second" className="clock__second" /> */}
                    <ClockHand $handType="minute" className="clock__minute" />
                    <ClockHand $handType="hour" className="clock__hour" />
                    <ClockAxis />

                    {Array.from({ length: 60 }).map((_, idx) => (
                        <ClockIndicator key={`clockIndicator ${idx}`} $index={idx + 1} />
                    ))}
                </ClockContainer>
            </Glass>
        </>
    );
};

// Styled Components for Clock
const ClockContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    position: relative;
`;

const ClockHand = styled.div<{ $handType: string }>`
    top: 10%;
    position: absolute;
    left: calc(50% - 1px);
    /* left: 50%; */
    width: 2px;
    background: #f4eed7;
    transform-origin: bottom center;
    z-index: 2;
    border-radius: 1px;

    ${({ $handType, theme }) => {
        switch ($handType) {
            case "second":
                return `
          height: 40%;
          background: #4b9aaa;
          animation: rotate 60s infinite steps(60);
          z-index: 3;
        `;
            case "minute":
                return `
          height: 35%;
          background: ${theme.textColor};
          margin-top: 5%;
          opacity: 0.75;
          animation: rotate 3600s linear infinite;
        `;
            case "hour":
                return `
          height: 25%;
          background: ${theme.textColor};
          margin-top: 15%;
          animation: rotate 43200s linear infinite;
        `;
            default:
                return ``;
        }
    }}
`;

const ClockIndicator = styled.section<{ $index: number }>`
    top: 10%;
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    background: none;
    height: 40%;
    border-top: 2px solid #4b9aaa;
    transform-origin: bottom center;
    transform: rotateZ(${({ $index }) => $index * 6}deg);

    &:nth-of-type(5n) {
        opacity: 1;
        height: 40%;
        border-top: 7px solid ${({ theme }) => theme.textColor};
    }
`;

const ClockAxis = styled.div`
    background: #4b9aaa;
    width: 4%;
    height: 4%;
    margin-top: 48%;
    border-radius: 3px;
    z-index: 4;
`;

// Keyframes for animation
const keyframes = `
  @keyframes rotate {
    to {
      transform: rotateZ(360deg);
    }
  }
`;

export default ClockGlass;
