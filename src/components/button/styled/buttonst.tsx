import styled from "styled-components";
import { StyledProps } from "../../component.interface";

export const ButtonST = styled.button<StyledProps>`
    width: ${(props) => (props.width ? props.width : 8)}rem;
    height: ${(props) => (props.height ? props.height : 4)}rem;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 0.5rem;
    border: none;
    color: #fff;
    background: #717bd4;
    margin-top: ${(props) => (props.margin ? props.margin : 0)}rem;

    &:hover {
        background: #7155e4;
    }
`;

