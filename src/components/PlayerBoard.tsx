import React from 'react';
import PlayerInfo from "./PlayerInfo";
import PlayerScore from "./PlayerScore";


interface IPlayerBoard {
    playerId: string
    isFirst?: boolean;
}
const PlayerBoard: React.FC<IPlayerBoard> = ({playerId, isFirst= false}) => {
    return (
        <div>
            <div className={'flex flex-col my-5'}>
                {isFirst && (
                    <div className={'grid grid-cols-2 grid-rows-1 place-items-center w-1/3 self-end mb-4'}>
                        <p className={'col-start-1 row-start-1 font-bold text-xl'}>Games</p>
                        <p className={'col-start-2  row-start-1 font-bold text-xl'}>Scores</p>
                    </div>
                )}
               <div className={'flex justify-between'}>
                   <PlayerInfo playerId={playerId} />
                   <PlayerScore playerId={playerId} />
               </div>

            </div>
        </div>
    )
}

export default PlayerBoard;