import { HtmlProps } from "../component.interface";
import { WrapST } from "./styled";

export const Wrap = (props: HtmlProps) => {
    return (
        <WrapST height={props.height} width={props.width} back={props.back} flex={props.flex} border={props.border}>
            {props.children}
        </WrapST>
    );
};

