import { Text } from "../../../../utils/constants/text";
import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import { debounce } from "../../../../utils/debounce";
import { useRef, useState, useTransition } from "react";

interface MedicalSearchProps {
    setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
}

export default function MedicalSearchBox({ setSearchKeyword }: MedicalSearchProps): JSX.Element {
    const [inputValue, setInputValue] = useState("");
    const [isPending, startTransition] = useTransition();

    const debouncedTransition = useRef(
        debounce((value: string) => {
            startTransition(() => {
                setSearchKeyword(value);
            });
        }, 700)
    ).current;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setInputValue(val);
        debouncedTransition(val);
    };

    return (
        <Glass>
            <ContentArea>
                <Text.S3>동네명으로 검색</Text.S3>
                <SearchBar placeholder=" 예) 삼산동" value={inputValue} onChange={handleChange} />
                <Text.S3>{isPending ? "검색중..." : "-"}</Text.S3>
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
