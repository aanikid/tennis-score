import React from 'react';
import {useSelector} from "react-redux";
import {getHistoryGameByPlayerId, getPlayerInfo} from "../redux/selectors/PlayerSelector";
import {RootState} from "../redux/store";

interface Props {
    playerId: string
}

const PlayerScore: React.FC<Props> = ({playerId}) => {
    const playerGameHistory = useSelector(getHistoryGameByPlayerId(playerId));
    const playerInfo = useSelector(getPlayerInfo(playerId));
    const state = useSelector((state: RootState) => state.tennis)
    const formatNumToAv = (player: string, num: number) => {
        return state.advantage === player ? 'AV' : num
    }
    return (
        <div className={'grid grid-cols-2 grid-rows-1 bg-white place-items-center text-indigo-500 font-bold text-xl rounded w-1/3 border-l-4 border-indigo-500 '}>
            <p className={'col-start-1'}> {playerGameHistory.length}</p>
            <p className={'col-start-2'}> {formatNumToAv(playerId, playerInfo.score)}</p>
        </div>
    );
}

export default PlayerScore;