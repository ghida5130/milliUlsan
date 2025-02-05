import NavLink from "../../atoms/header/navLink";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

interface NavigationMenuProps {
    active: boolean;
}

export default function NavigationMenu({ active }: NavigationMenuProps): JSX.Element {
    // const urlPath = useState<string>();
    const pathName = useLocation().pathname;

    return (
        <nav>
            <HeaderUl $active={active}>
                <li>
                    <NavLink destination="/" label="홈" isActive={pathName === "/"} />
                </li>
                <li>
                    <NavLink destination="/weather" label="날씨 및 대기" isActive={pathName === "/weather"} />
                </li>
                <li>
                    <NavLink destination="/festival" label="축제" isActive={pathName === "/festival"} />
                </li>
                <li>
                    <NavLink destination="/medical" label="병원시설" isActive={pathName === "/medical"} />
                </li>
                <li>
                    <NavLink
                        destination="/culturalFacility"
                        label="문화시설"
                        isActive={pathName === "/culturalFacility"}
                    />
                </li>
                <li>
                    <NavLink destination="/cinema" label="영화관" isActive={pathName === "/cinema"} />
                </li>
            </HeaderUl>
        </nav>
    );
}

const HeaderUl = styled.ul<{ $active: boolean }>`
    display: flex;
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: ${(props) => (props.$active ? "0px" : "-100vh")};
    padding: 80px 20px;
    transition: top 0.3s ease;
    flex-direction: column;
    align-items: center;
    /* background: rgba(224, 224, 224, 0.6); */
    /* backdrop-filter: blur(12px); */
    /* -webkit-backdrop-filter: blur(12px); */
    @media screen and (min-width: 768px) {
        position: static;
        flex-direction: row;
        align-items: center;
        height: 100%;
        width: 100%;
        background: none;
        padding: 0;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
    }
    li {
        padding: 12px;
        &:active {
        }
    }
`;
