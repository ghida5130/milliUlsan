import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { ThemeType } from "../../../styles/theme";

//components
import NavigationMenu from "../../molecules/header/navigationMenu";
import HeaderImageBtn from "../../atoms/header/headerImageBtn";
import Image from "../../atoms/base/Image";
import HeaderMenuBtn from "../../atoms/header/headerMenuBtn";

export default function Navbar() {
    const [menuBtnActive, setMenuBtnActive] = useState(false);
    const [scroll, setScroll] = useState(false);
    let navigate = useNavigate();
    const location = useLocation();

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setScroll(scrollTop > 20);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setMenuBtnActive(false);
    }, [location]);

    return (
        <>
            <HeaderWrapper $scroll={scroll}>
                <HeaderImageBtn
                    onClick={() => {
                        navigate("/");
                    }}
                    $responsiveHidden={false}
                >
                    <Image src="/images/ulsanIcon.svg" alt="" width="35px" />
                </HeaderImageBtn>
                <NavigationMenu active={menuBtnActive} />

                <HeaderImageBtn
                    onClick={() => {
                        setMenuBtnActive(!menuBtnActive);
                    }}
                    $responsiveHidden={true}
                >
                    <HeaderMenuBtn isActive={menuBtnActive} />
                </HeaderImageBtn>
            </HeaderWrapper>
            <HeaderBackground $scroll={scroll} $active={menuBtnActive} />
        </>
    );
}

const HeaderWrapper = styled.header<{ $scroll: boolean; theme: ThemeType }>`
    position: fixed;
    top: 0;
    width: 100vw;
    height: ${({ $scroll }) => ($scroll ? "60px" : "80px")};
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9999;
    transition: height 0.5s ease, background-color 0.5s ease, padding 0.5s ease;
    @media screen and (min-width: 768px) {
        padding: ${({ $scroll }) => ($scroll ? "0 40px" : "0 30px")};
    }
`;

const HeaderBackground = styled.div<{ $scroll: boolean; theme: ThemeType; $active: boolean }>`
    position: fixed;
    top: 0;
    width: 100vw;
    height: ${({ $active, $scroll }) => ($active ? "100vh" : $scroll ? "60px" : "80px")};
    background-color: ${({ $scroll, theme, $active }) => ($active || $scroll ? theme.NavBarColor : "")};
    transition: height 0.5s ease, background-color 0.5s ease;
    backdrop-filter: ${({ $scroll, $active }) => ($scroll || $active ? "blur(10px)" : "")};
    -webkit-backdrop-filter: ${({ $scroll, $active }) => ($scroll || $active ? "blur(10px)" : "")};
    z-index: 9998;
`;
