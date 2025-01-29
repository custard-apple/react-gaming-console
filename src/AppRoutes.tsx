import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Shuffle15 from './games/Shuffle15/Shuffle15';

const AppRoutes = () => {
    return (
        <div className='route-container'>
            <BrowserRouter>
                <nav>
                    <ul className='route-menus'>
                        <li><Link to="/">Home </Link></li>
                        <li><Link to="/tictactoe" >Tic Tac Toe</Link></li>
                        <li><Link to="/shuffle15">15 Shuffle</Link></li>
                    </ul>
                </nav>
                <Routes>
                    {/* <Route path='/' element={{}} /> */}
                    {/* <Route path='/tictactoe' element={<TicTacToe />} /> */}
                    <Route path='/shuffle15' element={<Shuffle15 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default AppRoutes;