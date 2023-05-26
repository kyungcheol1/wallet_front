import { useInput } from "../../hooks/useinput";
import { InputProps } from "../component.interface";
import { InputST } from "./styled";

export const Input = (props: InputProps) => {
    const { value, onChange } = useInput();
    return <InputST id={props.id} width={props.width} placeholder={props.placeholder} onChange={onChange} />;
};

