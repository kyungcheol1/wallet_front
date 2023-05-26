import styled, { css } from "styled-components";
import { StyledProps } from "../../component.interface";

export const LwrapST = styled.div<StyledProps>`
    width: ${(props) => (props.width ? props.width : 50)}rem;
    height: ${(props) => (props.height ? props.height : 30)}rem;
    background: ${(props) => (props.back ? "#" + props.back : "none")};
    border-radius: 1rem;
    border: ${(props) => (props.border ? "1px solid #0094FF" : "none")};
    overflow-y: auto;

    ${(props) =>
        props.flex &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
        `}
    margin: 0 auto;
`;

