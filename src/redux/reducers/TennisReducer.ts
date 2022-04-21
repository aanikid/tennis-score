import {PlayerType, TennisActionType, TennisStateType} from "../types";
import {PLAY_PAUSE, POINT_SCORED, RESTART_GAME} from "../constants/TennisConstants";
import produce from "immer";

const initialState = {
    player1: {score: 0, name: 'Federer'},
    player2: {score: 0, name: 'Nalbadian'},
    advantage: null,
    winner: null,
    playing: true,
} as TennisStateType;

export function tennisReducer(state = initialState, action: TennisActionType) {
    switch (action.type) {
        case RESTART_GAME:
            return initialState;
        case PLAY_PAUSE:
            return {...state, playing: !state.playing};
        case POINT_SCORED:
            const player: string  = action.payload!.player
            const otherPlayer = player === 'player1' ? 'player2' : 'player1';
            const currentPlayerScored = state[player as keyof typeof initialState] as PlayerType;
            switch (true){
                case null !== state.winner:
                    return state;
                case !state.playing:
                    return state;
                case currentPlayerScored.score <= 15:
                    return {...state, [player] : {...currentPlayerScored, score: currentPlayerScored.score +15}};
                case currentPlayerScored.score === 30:
                    return {...state, [player]: {...currentPlayerScored, score: 40}};
                case currentPlayerScored.score === 40:
                    if(state[otherPlayer].score !== 40){
                        return {...state, winner: player};
                    }
                    if(state.advantage === player){
                        return {...state, winner: player};
                    }
                    if(state.advantage === null){
                        return {...state, advantage: player}
                    }
                    break;
                default:
                    return {...state, advantage: null}
            }
            break;
        default:
            return state;
    }
}

export default tennisReducer;