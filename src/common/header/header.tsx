import { Wrap } from "../../components";
import { HtmlProps } from "../../components/component.interface";

export const Header = (props: HtmlProps) => {
    return (
        <Wrap height={11.25} width={43.75} back={"0094FF"} flex={"true"}>
            <div style={{ fontSize: "2.5rem", color: "#fff", fontWeight: "600" }}>{props.text}</div>
        </Wrap>
    );
};

