import React from 'react';
import {useSelector} from "react-redux";
import {getHistoryGameByPlayerId, getPlayerInfo} from "../../redux/selectors/PlayerSelector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import {faBaseballBall} from "@fortawesome/free-solid-svg-icons";
import federer from '../../assets/federer.jpg'
import nalbandian from '../../assets/nalbandian.jpg'
interface IPlayerBoard {
    playerId: string
}
const PlayerBoard: React.FC<IPlayerBoard> = ({playerId}) => {
    const playerInfo = useSelector(getPlayerInfo(playerId))
    const playerGameHistory = useSelector(getHistoryGameByPlayerId(playerId));
    return (
        <div>
            <div className={'img-container'}>
                <img className={'img'}
                    src={playerId === 'player1' ? federer : nalbandian}
                    alt={`${playerId} portrait`}
                />
            </div>
            <div className={'info-container'}>
                {playerGameHistory.map((item, index) =>
                    (
                        <div className={'icon'} key={index}>
                            <FontAwesomeIcon icon={faBaseballBall} size={'lg'} color={'green'} />
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default PlayerBoard;