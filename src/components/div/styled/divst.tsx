import { styled } from "styled-components";
import { StyledProps } from "../../component.interface";

export const DivST = styled.div<StyledProps>`
    width: ${(props) => (props.width ? props.width : 37.5)}rem;
    height: ${(props) => (props.height ? props.height : 5)}rem;
    display: flex;
    justify-content: space-between;
    background: #d9ebff;
    border: none;
    border-radius: 1rem;
    padding: 0.8rem;
    box-sizing: border-box;
    margin: ${(props) => (props.margin ? `0 0 ${props.margin}rem ${props.marginL ? props.marginL : 0}rem` : "0rem")};
    font-size: 1.4rem;
`;

