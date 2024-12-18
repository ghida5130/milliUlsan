import styled from "styled-components";
import Glass from "../../../atoms/glass/glass";
import { Text } from "../../../../utils/constants/text";
import { useState } from "react";

export default function CheckListGlass(): JSX.Element {
    const [listLength, setListLength] = useState(1);

    const handleClick = () => {};

    return (
        <>
            <Glass>
                <ContentArea>
                    {Array.from({ length: listLength }, (_, index) => (
                        <CheckList key={index}>
                            <CheckBox />
                            <Text.S3>checklist</Text.S3>
                        </CheckList>
                    ))}
                    <PlusBtn onClick={handleClick} />
                </ContentArea>
            </Glass>
        </>
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

const CheckList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 20%;
`;

const CheckBox = styled.div`
    height: 100%;
    aspect-ratio: 1/1;
    background: black;
`;

const PlusBtn = styled.button`
    height: 20px;
    width: 20px;
    background: red;
`;
