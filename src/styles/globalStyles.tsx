import { createGlobalStyle } from "styled-components";
import { F } from "../utils/constants/fontSize";
import reset from "styled-reset";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${reset}
    @font-face {
    font-family: "SUIT";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Thin.woff2") format("woff2");
    font-weight: 100;
    }
    @font-face {
        font-family: "SUIT";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-ExtraLight.woff2") format("woff2");
        font-weight: 200;
    }
    @font-face {
        font-family: "SUIT";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Light.woff2") format("woff2");
        font-weight: 300;
    }
    @font-face {
        font-family: "SUIT";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2") format("woff2");
        font-weight: 400;
    }
    @font-face {
        font-family: "SUIT";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2") format("woff2");
        font-weight: 500;
    }
    @font-face {
        font-family: "SUIT";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-SemiBold.woff2") format("woff2");
        font-weight: 600;
    }
    @font-face {
        font-family: "SUIT";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2") format("woff2");
        font-weight: 700;
    }
    @font-face {
        font-family: "SUIT";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-ExtraBold.woff2") format("woff2");
        font-weight: 800;
    }
    @font-face {
        font-family: "SUIT";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Heavy.woff2") format("woff2");
        font-weight: 900;
    }
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: "SUIT";
        font-weight: 400;
        min-width: 320px;
        background-color: ${({ theme }) => theme.bgColor};
        color: ${({ theme }) => theme.textColor};
        transition: background-color 0.5s ease, color 0.5s ease;
    }
    html {
        font-size: 62.5%;
        /* font-size: calc(1rem + 0.5vw); */
        color: black;
    }
    button {
        background: none;
        color: inherit;
        border: none;
        cursor: pointer;
        outline: inherit;
        font-family: inherit;
        font-size: ${F.MEDIUM};
    }
    button,
    button:focus,
    button:active {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    input:focus {
        outline: none;
    }
`;

export default GlobalStyle;
