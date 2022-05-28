import React from 'react';
import federer from '../assets/federer.jpg'
import nalbandian from '../assets/nalbandian.jpg'
import {useSelector} from "react-redux";
import {getPlayerInfo} from "../redux/selectors/PlayerSelector";

interface Props {
    playerId: string
}

const PlayerInfo: React.FC<Props> = ({playerId}) => {
    const playerInfo = useSelector(getPlayerInfo(playerId));
    return (
        <div className={'flex items-center'}>
            <img className={'w-14 h-14 rounded-full object-cover shadow-2xl'}
                 src={playerId === 'player1' ? federer : nalbandian}
                 alt={`${playerId} portrait`}
            />
            <p className={'uppercase ml-4 font-bold text-xl text-gray-60014'}>{playerInfo.name}</p>
        </div>
    );
}

export default PlayerInfo;