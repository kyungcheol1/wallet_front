import { HtmlProps } from "../component.interface";
import { ButtonST } from "./styled";

export const Button = (props: HtmlProps) => {
    return (
        <ButtonST height={props.height} width={props.width} onClick={props.onclick} margin={props.margin} onSubmit={props.onSubmit}>
            {props.text}
        </ButtonST>
    );
};

