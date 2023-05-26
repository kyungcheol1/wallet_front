import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Wrap } from "../components";
import { ListDiv } from "../components/div";
import { Input } from "../components/input";
import { Actioninit } from "../store/account";
import { RootState } from "../store/rootReducer";
import request from "../util/request";

export const Transaction = () => {
    const account = useSelector((state: RootState) => state.account) as Actioninit;
    const [isMining, setisMingin] = useState(false);
    const navigate = useNavigate();

    const spanstyle = { fontSize: "1.4rem", paddingTop: "0.7rem" };
    const myaccount = account.accountList?.filter((v) => v.account === account.useAccount);
    let balance: number | undefined;
    if (myaccount) balance = myaccount[0].balance;

    const submitHandler = async (e: FormEvent) => {
        try {
            e.preventDefault();
            const target = e.target as HTMLInputElement;
            const sender = account.useAccount;
            const received = target.querySelector("#received") as HTMLInputElement;
            const amount = target.querySelector("#amount") as HTMLInputElement;
            if (balance! < parseInt(amount.value)) return alert("잔액이 부족합니다");
            const receipt = {
                sender: sender,
                received: received.value,
                amount: amount.value,
            };
            const response = await request.post("/transaction", { receipt });
            if (response.data) setisMingin(true);
        } catch (error) {
            return alert("잘못된 거래 방식 입니다.");
        }
    };

    const transactionChecked = async () => {
        const response = await request.get("/transactionpool");
        // const index = response.data.findIndex((hash) => transacion.hash === tx.hash);
        // if (index !== -1) this.transactionPool.splice(index, 1);
    };

    const backClickEvent = () => {
        navigate("/wallet");
    };

    transactionChecked();

    return (
        <>
            {isMining ? (
                <Wrap width={43.75} height={40} border={"true"} flex={"true"}>
                    <div style={{ fontSize: "2rem" }}>진행중....</div>
                </Wrap>
            ) : (
                <Wrap width={43.75} height={40} border={"true"} flex={"true"}>
                    <form onSubmit={submitHandler}>
                        <ListDiv margin={1.5}>
                            <span style={spanstyle}>내 계정 :</span>
                            <span id="sender" style={spanstyle}>
                                {account.useAccount}
                            </span>
                        </ListDiv>
                        <ListDiv width={18} margin={1.5} marginL={19.5}>
                            <span style={spanstyle}>잔액 : {balance}</span>
                            <span id="balance" style={spanstyle}></span>
                        </ListDiv>
                        <ListDiv margin={1.5}>
                            <span style={spanstyle}>보낼 계정:</span>
                            <Input width={29.5} id="received" placeholder="입력하세요"></Input>
                        </ListDiv>
                        <ListDiv width={18} margin={2} marginL={19.5}>
                            <span style={spanstyle}>보낼 금액:</span>
                            <Input width={9.5} id="amount" placeholder="입력하세요"></Input>
                        </ListDiv>
                        <div style={{ width: "37.5rem", display: "flex", justifyContent: "space-between" }}>
                            <Button text="뒤로" onclick={backClickEvent}></Button>
                            <Button text="거래"></Button>
                        </div>
                    </form>
                </Wrap>
            )}
        </>
    );
};

