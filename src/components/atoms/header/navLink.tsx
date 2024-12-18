// Navbar 텍스트버튼 내용 및 디자인 (hover등)

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Text } from "../../../utils/constants/text";
import { ThemeType } from "../../../styles/theme";
import { useEffect, useState } from "react";
import { debounce } from "../../../utils/debounce";

interface NavLinkProps {
    destination: string;
    label: string;
    isActive: boolean;
}

export default function NavLink({ destination, label, isActive }: NavLinkProps): JSX.Element {
    let navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        const debounceResize = debounce(handleResize, 200);
        window.addEventListener("resize", debounceResize);
        return () => {
            window.removeEventListener("resize", debounceResize);
        };
    }, []);

    return (
        <NavLinkBtn onClick={() => navigate(destination)} $isActive={isActive}>
            {isMobile ? <Text.S6 fontWeight="600">{label}</Text.S6> : <Text.S2>{label}</Text.S2>}
        </NavLinkBtn>
    );
}

const NavLinkBtn = styled.button<{ theme: ThemeType; $isActive: boolean }>`
    padding: 7px 10px;
    /* box-shadow: 0 0 0 ${({ theme }) => theme.bgColor}, 0 0 0 ${({ theme }) => theme.bgColor}; */
    border-radius: 6px;
    white-space: nowrap;
    background-color: ${({ $isActive, theme }) =>
        $isActive && (theme.mode === "light" ? "rgb(255, 255, 255, 0.5)" : "rgb(0,0,0, 0.5)")};
    transition: background-color 0.3s ease;

    @media screen and (min-width: 1200px) {
        &:hover {
            background-color: ${({ theme }) =>
                theme.mode === "light" ? "rgb(255, 255, 255, 0.3)" : "rgb(0,0,0, 0.3)"};
        }
    }
`;
