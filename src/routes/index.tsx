import { Route, Routes } from "react-router-dom";
import { Header } from "../common";
import { Main, MyWalllet, Wallet, Transaction } from "../pages";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header text="My Wallet" />}></Route>
                <Route path="/wallet/*" element={<Header text="My Account" />}></Route>
                <Route path="/transaction" element={<Header text="Transaction" />}></Route>
                <Route path="/mywallet" element={<Header text="MY Account" />}></Route>
            </Routes>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/mywallet" element={<MyWalllet />} />
            </Routes>
        </>
    );
};

