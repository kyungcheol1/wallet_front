import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/rootReducer";
import { Button } from "../button/button";
import { Animation, HtmlProps } from "../component.interface";
import { ButtonListST } from "./styled";

export const ButtonList = (props: Animation) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { accountList } = useSelector((state: RootState) => state.account);
    const click = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        dispatch({ type: "AC_USE", payload: { accountList, useAccount: props.account } });
        if (target.innerHTML === "거래") {
            navigate("/transaction");
        } else {
            navigate("/mywallet");
        }
    };
    return (
        <ButtonListST>
            <Button text="거래" onclick={click}></Button>
            <Button text="상세" onclick={click}></Button>
        </ButtonListST>
    );
};

