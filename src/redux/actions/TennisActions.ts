import {PLAY_PAUSE, POINT_SCORED, RESTART_GAME} from "../constants/TennisConstants";

export const playPause = () => ({type: PLAY_PAUSE});

export const restartGame = () => ({type: RESTART_GAME});

export const pointScored = (player: string) => ({type: POINT_SCORED, payload: {player: player}});

export default {
  playPause,
  restartGame,
  pointScored,
};