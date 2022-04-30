import React from 'react';
import {Buttons} from "./components/buttons/Buttons";
import {playPause, pointScored, restartGame} from "./redux/actions/TennisActions";
import './app.css'
import {Score} from "./components/score/Score";
import {useSelector} from "react-redux";
import {RootState} from "./redux/reducers";
import PlayerBoard from "./components/playerBoard/PlayerBoard";

function App() {
    const state = useSelector((state: RootState) => state.tennis);
    return (
            <div className="root">
                <div className={'flex-col items-center justify-between bg-indigo-50 p-5 rounded-xl mb-5'}>
                    <div>
                        <div className={'grid grid-cols-2 w-1/3 w-full ml-auto text-xl font-bold'}>
                            <p>Jeux</p>
                            <p>Score</p>
                        </div>
                    </div>
                    <PlayerBoard playerId={'player1'}/>
                    <PlayerBoard playerId={'player2'}/>
                </div>

                <div className="buttons">
                    <div className="buttons-row">
                        <Buttons action={restartGame()} title={'Remettre à zéro'}/>
                        <Buttons action={playPause()} title={'Pause / Reprendre'}/>
                    </div>
                </div>
            </div>
    );
}

export default App;
