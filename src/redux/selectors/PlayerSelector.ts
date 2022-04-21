import {RootState} from "../reducers";
import {initialState} from "../reducers/TennisReducer";
import {PlayerType} from "../types";

export const getPlayerInfo = (playerId: string) => {
    return (state: RootState) =>
        state.tennis[playerId as keyof typeof initialState] as PlayerType
}

export const getPlayerById = (playerId: string) => {
    return (state: RootState) =>
        state.tennis.gameHistory.filter((item) => item.winner === playerId);
};

