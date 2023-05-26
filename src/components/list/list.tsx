import { useState } from "react";
import { ButtonList } from "../buttonList/buttonList";
import { AccountProps } from "../component.interface";
import { ListDiv } from "../div";

export const AccountList = (props: AccountProps) => {
    const [state, setState] = useState(false);

    const clickHandler = () => {
        setState(!state);
    };

    return (
        <>
            <ListDiv margin={1.5}>
                <ListDiv width={26} height={3} divclick={clickHandler}>
                    {props.account}
                </ListDiv>
                <ListDiv width={9} height={3}>{`잔액 : ${props.balance}`}</ListDiv>
            </ListDiv>
            {state && <ButtonList state={state} account={props.account}></ButtonList>}
        </>
    );
};

