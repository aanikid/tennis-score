import React from 'react';
import {useSelector} from "react-redux";
import {getHistoryGameByPlayerId, getPlayerInfo} from "../../redux/selectors/PlayerSelector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import {faBaseballBall, faPlay, faPlayCircle, faTableTennis} from "@fortawesome/free-solid-svg-icons";
import federer from '../../assets/federer.jpg'
import nalbandian from '../../assets/nalbandian.jpg'
import {pointScored, restartGame} from "../../redux/actions/TennisActions";
import {Buttons} from "../buttons/Buttons";
interface IPlayerBoard {
    playerId: string
}
const PlayerBoard: React.FC<IPlayerBoard> = ({playerId}) => {
    const playerInfo = useSelector(getPlayerInfo(playerId));
    const playerGameHistory = useSelector(getHistoryGameByPlayerId(playerId));
    return (
        <div>
            <div className={'flex my-5 justify-between'}>
               <div className={'flex items-center'}>
                   <img className={'w-12 h-12 rounded-full object-cover shadow-2xl'}
                        src={playerId === 'player1' ? federer : nalbandian}
                        alt={`${playerId} portrait`}
                   />
                   <Buttons action={pointScored(playerId)} style='w-10 h-10 rounded ml-2 text-indigo-500 bg-indigo-100' >
                       <FontAwesomeIcon icon={faPlay} size={'lg'} color={'text-indigo-500'} />
                       <p></p>
                   </Buttons>
               </div>
                <div className={'grid grid-cols-2 grid-rows-1 bg-gray-300 place-items-center rounded w-1/3 border-r-4 border-indigo-500 '}>
                    <p className={'col-start-1'}> {playerGameHistory.length}</p>
                    <p className={'col-start-2'}> {playerInfo.score}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerBoard;