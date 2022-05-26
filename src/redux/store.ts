import {combineReducers, configureStore} from "@reduxjs/toolkit";
import TennisReducer from "./reducers/TennisReducer";

const rootReducer = combineReducers({
    tennis: TennisReducer,
});
export default configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>