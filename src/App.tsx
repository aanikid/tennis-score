import React from 'react';
import PlayerBoard from "./components/PlayerBoard";
import {faPlay, faRotateBack} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Buttons} from "./components/Buttons";
import {pointScored, restartGame} from "./redux/actions/TennisActions";

function App() {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <h1 className={'font-bold my-4 text-xl'}>OpenClassRoom Challenge: Tennis-Score</h1>
            <div className={'flex w-full h-[250px] justify-center'}>
                <div className={'flex-col items-center justify-between bg-indigo-50 p-5 rounded-tl-xl rounded-bl-xl h-full mb-5 w-1/2'}>
                    <PlayerBoard playerId={'player1'} isFirst/>
                    <PlayerBoard playerId={'player2'}/>
                </div>
                <div className="bg-indigo-700 rounded-tr-xl rounded-br-xl relative h-full w-14 items-center flex flex-col w-full h-full justify-around">
                    <Buttons action={pointScored()}>
                        <FontAwesomeIcon icon={faPlay} size={'lg'} color={'white'} className={'cursor-pointer'}/>
                    </Buttons>
                    <Buttons action={restartGame()}>
                        <FontAwesomeIcon icon={faRotateBack} size={'lg'} color={'white'} className={'cursor-pointer'}/>
                    </Buttons>
                </div>
            </div>
        </div>
    );
}

export default App;
