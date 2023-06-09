import { combineReducers } from "redux";
import { accountReducer } from "./account";

export const rootReducer = combineReducers({ account: accountReducer });

export type RootState = ReturnType<typeof rootReducer>;

