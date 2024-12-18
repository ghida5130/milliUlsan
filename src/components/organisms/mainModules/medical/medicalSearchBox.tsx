import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";

interface MedicalSearchProps {
    searchKeyword: string;
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export default function MedicalSearchBox({ searchKeyword, setSearchKeyword }: MedicalSearchProps): JSX.Element {
    return (
        <Glass>
            <ContentArea>
                <Text.S3>동네명으로 검색</Text.S3>
                <SearchBar
                    placeholder=" 예) 삼산동"
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => {
                        setSearchKeyword(e.target.value);
                    }}
                />
            </ContentArea>
        </Glass>
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

const SearchBar = styled.input`
    padding: 0 5px;
    height: 20%;
    width: 80%;
    border: 2px solid ${({ theme }) => (theme.mode === "light" ? "rgba(0, 0, 0, 0.3)" : "rgba(255,255,255, 0.4)")};
    border-radius: 7px;
    background: none;
    font: inherit;
    font-size: 18px;
    color: ${({ theme }) => (theme.mode === "light" ? "black" : "white")};
    transition: border 0.5s ease, color 0.5s ease;

    &:focus {
        border: 2px solid ${({ theme }) => (theme.mode === "light" ? "black" : "white")};
    }
`;
