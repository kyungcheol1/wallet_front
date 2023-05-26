export interface AccountList {
    account: string;
    balance: number;
}

export interface Actioninit {
    accountList?: AccountList[];
    isLoading?: boolean;
    useAccount?: string;
    error?: boolean;
}

export const init: Actioninit = {
    accountList: [],
    isLoading: false,
    useAccount: "",
    error: false,
};

export interface AccountActions {
    type: "AC_START" | "AC_SUCCESS" | "AC_ERROR" | "AC_USE";
    payload: Actioninit;
}

export const accountReducer = (state = init, action: AccountActions) => {
    switch (action.type) {
        case "AC_START":
            return { ...init, isLoading: true };
        case "AC_SUCCESS":
            return { ...init, isLoading: false, accountList: action.payload };
        case "AC_ERROR":
            return { ...init, error: true };
        case "AC_USE":
            return { ...init, accountList: action.payload.accountList, useAccount: action.payload.useAccount };
        default:
            return state;
    }
};

