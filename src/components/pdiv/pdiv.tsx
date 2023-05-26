import { HtmlProps } from "../component.interface";
import { PdivST } from "./styled/pdivst";

export const Pdiv = (props: HtmlProps) => {
    return <PdivST>{props.children}</PdivST>;
};
