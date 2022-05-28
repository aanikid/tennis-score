import {POINT_SCORED, RESTART_GAME, SET_PAUSE} from "../constants/TennisConstants";

export const restartGame = () => ({type: RESTART_GAME});

export const pauseGame = () => ({type: SET_PAUSE});

export const pointScored = () => ({type: POINT_SCORED});