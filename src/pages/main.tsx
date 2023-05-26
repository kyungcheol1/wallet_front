import { useNavigate } from "react-router-dom";
import { Button, Wrap } from "../components";

export const Main = () => {
    const navigate = useNavigate();
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate("/wallet");
    };

    return (
        <>
            <Wrap width={43.75} height={40} flex={"true"} border={"true"}>
                <Button height={5} width={15} text="내 계정" onclick={clickHandler} />
            </Wrap>
        </>
    );
};

