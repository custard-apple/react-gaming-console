import React, { useState, useMemo } from 'react';
import Shuffle15 from '../../games/Shuffle15/Shuffle15';
import './Modal.css';

const Modal = props => {
    // function that takes boolean as param to conditionally display popup
    const { showModal, gameId } = props;

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-dialog">
                    <button className='modal-close-icon' onClick={() => showModal(false)}>&times;</button>
                    <Shuffle15 />
                    <button className='modal-close-btn' onClick={() => showModal(false)}>Close</button>
                </div>
            </div>

        </div>
    );
}

export default Modal;