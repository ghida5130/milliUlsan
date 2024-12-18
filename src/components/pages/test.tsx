import styled from "styled-components";
import { Text } from "../../utils/constants/text";

const Test = () => {
    return (
        <>
            <TestSpan>Item 0</TestSpan>
            <span style={{ margin: "10px" }}>Item 1 </span>
            <span>Item 2 </span>
            <div>Itme 3</div>
        </>
    );
};

const TestSpan = styled.span`
    white-space: pre;
`;

export default Test;
