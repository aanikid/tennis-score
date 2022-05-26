import React from 'react';
import {useSelector} from "react-redux";
import federer from '../assets/federer.jpg'
import nalbandian from '../assets/nalbandian.jpg'
import {getHistoryGameByPlayerId, getPlayerInfo} from "../redux/selectors/PlayerSelector";
import {RootState} from "../redux/store";


interface IPlayerBoard {
    playerId: string
    isFirst?: boolean;
}
const PlayerBoard: React.FC<IPlayerBoard> = ({playerId, isFirst= false}) => {
    const playerInfo = useSelector(getPlayerInfo(playerId));
    const playerGameHistory = useSelector(getHistoryGameByPlayerId(playerId));
    const state = useSelector((state: RootState) => state.tennis)
    const formatNumToAv = (player: string, num: number) => {
        return state.advantage === player ? 'AV' : num
    }
    return (
        <div>
            <div className={'flex flex-col my-5'}>
                {isFirst && (
                    <div className={'grid grid-cols-2 grid-rows-1 place-items-center w-1/3 self-end mb-4'}>
                        <p className={'col-start-1 row-start-1 font-bold text-xl'}>Jeux</p>
                        <p className={'col-start-2  row-start-1 font-bold text-xl'}>Score</p>
                    </div>
                )}
               <div className={'flex justify-between'}>
                   <div className={'flex items-center'}>
                       <img className={'w-14 h-14 rounded-full object-cover shadow-2xl'}
                            src={playerId === 'player1' ? federer : nalbandian}
                            alt={`${playerId} portrait`}
                       />
                       <p className={'uppercase ml-4 font-bold text-xl text-gray-60014'}>{playerInfo.name}</p>
                   </div>

                   <div className={'grid grid-cols-2 grid-rows-1 bg-white place-items-center text-indigo-500 font-bold text-xl rounded w-1/3 border-r-4 border-indigo-500 '}>
                       <p className={'col-start-1'}> {playerGameHistory.length}</p>
                       <p className={'col-start-2'}> {formatNumToAv(playerId, playerInfo.score)}</p>
                   </div>
               </div>

            </div>
        </div>
    )
}

export default PlayerBoard;