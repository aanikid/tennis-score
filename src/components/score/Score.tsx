import React from "react";
import {TennisStateType} from "../../redux/types";
import './styles.css'

interface ScoreInterface {
    state: TennisStateType
}

export const Score: React.FC<ScoreInterface> = ({state}) => {
    const {advantage, player2, player1, playing, winner} = state
    const formatNumToAv = (player: keyof typeof state, num: number) => {
        return advantage === player ? 'AV' : num
    }
    const getWinnerName = () => {
        if (winner === 'player1'){
            return player1.name
        }
        else if (winner === 'player2'){
            return player2.name
        }
    }
    return (
        null !== winner ? (
            <p className='display'>{`${getWinnerName()} win`}</p>
        ) : !playing ? (
            <p className='display'>C'est la pause</p>
        ) : (
            <div className='display'>
                {`Le score est : ${formatNumToAv('player1', player1.score)} - ${formatNumToAv('player2', player2.score)}`}
            </div>
        )
    );
};