import {PlayerType, TennisStateType} from "../types";
import { POINT_SCORED, RESTART_GAME} from "../constants/TennisConstants";
import produce from "immer";

export const initialState = {
    player1: {score: 0, name: 'Federer'},
    player2: {score: 0, name: 'Nalbadian'},
    advantage: null,
    winner: null,
    playing: true,
    gameHistory: [],
} as TennisStateType;

export function tennisReducer(state = initialState, action: any) {
    if (action.type === RESTART_GAME) {
       return initialState;
    }
    if (action.type === POINT_SCORED) {
        const player = () => {
            let rmd = Math.floor(Math.random() * 3);
            if(rmd > 1) return "player1";
            else return "player2"
        }
        const otherPlayer = player() === "player1" ? "player2" : "player1";

        if (state.winner) {
            return produce(state, (draft) => {
                if (draft.winner) {
                    draft.gameHistory.push({
                        player1: draft.player1.score,
                        player2: draft.player2.score,
                        winner: draft.winner
                    } as never);
                }
                draft.player1.score = 0;
                draft.player2.score = 0;
                draft.advantage = null;
                draft.winner = null;
                draft.playing = true;
            });
        }
        if (!state.playing) {
            return state;
        }
        return produce(state, (draft) => {
            const currentPlayerScore = draft[player() as keyof typeof initialState] as PlayerType;
            if (currentPlayerScore.score <= 15) {
                currentPlayerScore.score += 15
                return;
            }
            if (currentPlayerScore.score === 30) {
                currentPlayerScore.score = 40
                return;
            }
            if (currentPlayerScore.score === 40) {
                if (draft.advantage === player() || draft[otherPlayer].score !== 40) {
                    draft.winner = player();
                    return;
                }
                if (draft.advantage === null) {
                    draft.advantage = player();
                    return;
                }
                draft.advantage = null;
                return;
            }
        })
    }
    return state;
}

export default tennisReducer;
