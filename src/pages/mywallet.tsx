import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Wrap } from "../components";
import { Pdiv } from "../components/pdiv";
import { RootState } from "../store/rootReducer";
import request from "../util/request";

interface Account {
    publicKey: string;
    privateKey: string;
    account: string;
}

export const MyWalllet = () => {
    const navigate = useNavigate();

    const { useAccount } = useSelector((state: RootState) => state.account);
    const [account, setAccount] = useState<Account>({ publicKey: "", privateKey: "", account: "" });

    const getAccount = async () => {
        const response = await request.post("/getaccount", {
            account: useAccount,
        });
        setAccount(response.data);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate("/wallet");
    };

    useEffect(() => {
        getAccount();
    }, []);

    return (
        <>
            <Wrap width={43.75} height={40} border={"true"} flex={"true"}>
                <Pdiv>
                    <p style={{ fontWeight: "bold", color: "#999" }}>privateKey : </p>
                    <p>{account.privateKey}</p>
                </Pdiv>
                <Pdiv>
                    <p style={{ fontWeight: "bold", color: "#999" }}>publicKey : </p>
                    <p>{account.publicKey}</p>
                </Pdiv>
                <Pdiv>
                    <p style={{ fontWeight: "bold", color: "#999" }}>account : </p>
                    <p>{account.account}</p>
                </Pdiv>
                <Button onclick={clickHandler} text="뒤로" />
            </Wrap>
        </>
    );
};

