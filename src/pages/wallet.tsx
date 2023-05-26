import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Wrap } from "../components";
import { accountList } from "../store/account/action";
import { useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AccountActions, Actioninit } from "../store/account";
import request from "../util/request";
import { RootState } from "../store/rootReducer";
import { Lwrap } from "../components/Lwrap";
import { AccountList } from "../components/list";

export const Wallet = () => {
    const dispatch = useDispatch<ThunkDispatch<AccountActions, null, AccountActions>>();

    const account = useSelector((state: RootState) => state.account) as Actioninit;

    useEffect(() => {
        dispatch(accountList());
    }, []);

    let myAccocunt = null;

    if (account.accountList)
        myAccocunt = account.accountList.map((v, i) => {
            return <AccountList key={i} account={v.account} balance={v.balance}></AccountList>;
        });

    const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const response = await request.put("/crateAccount");
        dispatch(accountList());
    };

    return (
        <>
            <Wrap width={43.75} height={40} border={"true"} flex={"true"}>
                <Lwrap width={43.75} flex={"true"}>
                    {myAccocunt ? myAccocunt : "계정이 없습니다"}
                </Lwrap>
                <Button width={10} text="계정 생성" margin={2} onclick={clickHandler}></Button>
            </Wrap>
        </>
    );
};

