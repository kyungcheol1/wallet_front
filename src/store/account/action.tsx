import { AnyAction, Dispatch } from "redux";
import request from "../../util/request";
import { AccountActions, Actioninit } from "./reduce";

const success = (payload: Actioninit): AccountActions => ({
    type: "AC_SUCCESS",
    payload: payload,
});

const fail = () => ({
    type: "AC_ERROR",
});

export const accountList = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await request.get("/accounts");
            dispatch(success(response.data));
            return response.data;
        } catch (e) {
            dispatch(fail());
        }
    };
};

