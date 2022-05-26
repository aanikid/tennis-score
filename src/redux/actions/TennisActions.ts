import {POINT_SCORED, RESTART_GAME} from "../constants/TennisConstants";

export const restartGame = () => ({type: RESTART_GAME});

export const pointScored = () => ({type: POINT_SCORED});