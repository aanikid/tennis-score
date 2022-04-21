import {combineReducers} from "@reduxjs/toolkit";
import TennisReducer from "./TennisReducer";

export const rootReducer = combineReducers({
    tennis: TennisReducer,
})
export type RootState = ReturnType<typeof rootReducer>
