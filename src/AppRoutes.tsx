import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './AppRoutes.css'
import Modal from './components/Modal/Modal';

const AppRoutes = () => {
    const [showGame, setShowGame] = useState(false);
    const onGameSelect = () => {
        setShowGame(true);
    }
    return (
        <>
            <div className='games-container'>
                <div className='game-option' onClick={onGameSelect}>15 Shuffle<span className="ribbon">NEW</span></div>
                <div className='game-option'  >Tic Tac Toe</div>
                <div className='game-option'>Snake</div>
                <div className='game-option'>Coin Drop</div>
                <div className='game-option'>Hung Man</div>
                <div className='game-option'>Game 2.0</div>
                <div className='game-option'>Game 3.0</div>
                <div className='game-option'>Game 4.0</div>
                <div className='game-option'>Game 5.0</div>
                <div className='game-option'>Game 6.0</div>
            </div>
            <div>
                {showGame ? <Modal gameId={1} showModal={setShowGame} /> : null}
            </div>
        </>
    );
}
export default AppRoutes;