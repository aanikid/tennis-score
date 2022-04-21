export type PlayerType = {
    score: number
    name: string
}
export type TennisStateType = {
    player1: PlayerType;
    player2: PlayerType;
    advantage: string | null;
    winner: string | null;
    playing: boolean,
};

export type TennisActionType = {
    type: string;
    payload?: {player: string};
};

