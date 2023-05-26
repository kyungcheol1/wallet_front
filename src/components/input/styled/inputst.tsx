import { styled } from "styled-components";

export const InputST = styled.input`
    width: ${(props) => (props.width ? props.width : 29)}rem;
    height: 3.5rem;
    border: none;
    background: none;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 1.4rem;

    &:focus {
        outline: none;
    }
`;

