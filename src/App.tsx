import React from 'react';
import {Buttons} from "./components/buttons/Buttons";
import {playPause, pointScored, restartGame} from "./redux/actions/TennisActions";
import './app.css'
import {Score} from "./components/score/Score";
import {useSelector} from "react-redux";
import {RootState} from "./redux/reducers";

function App() {
    const state = useSelector((state: RootState) => state.tennis)
    return (
        <div className="root">
            <Score state={state} />
            <div className="buttons">
                <div className="buttons-row">
                    <Buttons action={pointScored('player1')} title={`Point ${state.player1.name}`}/>
                    <Buttons action={pointScored('player2')} title={`Point ${state.player2.name}`}/>
                </div>
                <div className="buttons-row">
                    <Buttons action={restartGame()} title={'Remettre à zéro'}/>
                    <Buttons action={playPause()} title={'Pause / Reprendre'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
