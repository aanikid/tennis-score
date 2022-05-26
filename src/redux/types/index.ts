export type PlayerType = {  score: number;  name: string }

export type TennisStateType = {
    player1: PlayerType;
    player2: PlayerType;
    advantage: string | null;
    winner: string | null;
    playing: boolean,
    gameHistory: playerGameHistory[] | []
};

export type TennisActionType = { type: string; payload?: {player: string } };

export type playerGameHistory = Pick<TennisStateType, 'player1' | 'player2' | 'winner'>





