import { HtmlProps } from "../component.interface";
import { DivST } from "./styled";

export const ListDiv = (props: HtmlProps) => {
    return (
        <DivST height={props.height} width={props.width} margin={props.margin} onClick={props.divclick} marginL={props.marginL}>
            {props.children}
        </DivST>
    );
};

