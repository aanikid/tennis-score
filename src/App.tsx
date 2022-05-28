import React from 'react';
import PlayerBoard from "./components/PlayerBoard";
import {faPause, faPlay, faRotateBack} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Buttons} from "./components/Buttons";
import {pauseGame, pointScored, restartGame} from "./redux/actions/TennisActions";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";

function App() {
    const state = useSelector((state: RootState) => state.tennis);
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <h1 className={'font-bold my-4 text-xl'}>OpenClassRoom Challenge: Tennis-Score</h1>
            <div className={'flex w-full h-[250px] justify-center relative'}>
                {!state.playing && (
                    <div className={'bg-black/80 w-1/2 h-full -ml-14 absolute flex justify-center items-center rounded-tl-xl rounded-bl-xl'}>
                        <p className={'text-5xl text-red-500 opacity-100'}>Paused Game...</p>
                    </div>
                )}
                <div className={'flex-col items-center justify-between bg-indigo-50 p-5 rounded-tl-xl rounded-bl-xl h-full mb-5 w-1/2 px-16'}>

                    <PlayerBoard playerId={'player1'} isFirst/>
                    <PlayerBoard playerId={'player2'}/>
                </div>
                <div className="bg-indigo-700 rounded-tr-xl rounded-br-xl relative h-full w-14 items-center flex flex-col w-full h-full p-4 justify-between">

                    <Buttons action={pointScored()}>
                        <div className={'bg-white w-10 h-10 rounded-full flex items-center justify-center hove:scale-110'}>
                            <FontAwesomeIcon icon={faPlay} size={'lg'} className={'cursor-pointer text-indigo-700'}/>
                        </div>
                    </Buttons>

                    <div className={'flex flex-col justify-between h-20'}>
                        <Buttons action={pauseGame()}>
                            <FontAwesomeIcon icon={faPause} size={'lg'} color={state.playing ? 'white' : 'red'} className={'cursor-pointer'}/>
                        </Buttons>
                        <Buttons action={restartGame()}>
                            <FontAwesomeIcon icon={faRotateBack} size={'lg'} color={'white'} className={'cursor-pointer'}/>
                        </Buttons>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
