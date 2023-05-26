import { HtmlProps } from "../component.interface";
import { LwrapST } from "./styled";

export const Lwrap = (props: HtmlProps) => {
    return (
        <LwrapST height={props.height} width={props.width} back={props.back} flex={props.flex} border={props.border} onClick={props.onClick}>
            {props.children}
        </LwrapST>
    );
};

