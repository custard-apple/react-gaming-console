import React, { useEffect, useState } from 'react';

import "./Shuffle15.css";
// import Modal from '@/components/Modal/Modal';

const shuffleNumbers = (array: Array<number>) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const Shuffle15 = () => {
    const initialNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];
    const [shuffledArray, setShuffledArray] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({heading: '', content:''});
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState(0);

    const reload = () => {
        const numbers = shuffleNumbers(initialNumbers);
        setShuffledArray(numbers);
    }

    useEffect(() => {
        reload();
    }, []);

    // const whereIsEmptySpace = () => {
    //     return shuffledArray.findIndex((arrVal) => arrVal === '');
    // }

    const getMovableNewPosition = (index) => {
        const possiblePositions = [-1, 1, -4, 4];
        let swapIndex;
        for (let curValue of possiblePositions) {
            if (shuffledArray[index + curValue] === '') {
                swapIndex = index + curValue;
            }
        }
        return swapIndex;
    }

    const shuffleArray = (movableIndex, currentIndex) => {
        // displaying array
        const currentArray = [...shuffledArray];
        let tempVal = currentArray[movableIndex];
        currentArray[movableIndex] = currentArray[currentIndex];
        currentArray[currentIndex] = tempVal;
        return [...currentArray];
    }

    const handleClick = (index, value) => {
        setIsShowModal(true);
        if (0 === value) return;
        
        // current value can be moved to this index
        const movablePosition = getMovableNewPosition(index);
        if (movablePosition != undefined) {
            const newArray = shuffleArray(movablePosition, index);
            setShuffledArray([...newArray]);
            const currMove = moves + 1;
            setMoves(currMove);
        }
    }

    useEffect(() => {
        if (JSON.stringify(initialNumbers) === JSON.stringify(shuffledArray)) {
            setModalContent(() => ({
                heading: 'Congratulations!!!, You Won!!!',
                content: `you completed the puzzle with ${moves} & in ${time}`
            }));
            setIsShowModal(true);
        }
    }, [shuffledArray]);

    return (
        <>
            <button onClick={reload}>New Game</button>
            <button>Moves <span>{moves}</span></button>
            <div className="shuffle-container">
                {
                    shuffledArray.map((value, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleClick(index, value)}
                                className={`shuffle-square ${index + 1 === value ? 'active-square' : ''}`}>
                                {value ? <span className='shuffle-button'>
                                    <span className="shuffle-value ">{value}</span>
                                </span> : ''}
                            </div>
                        );
                    })
                }
            </div>
           {/* {isShowModal && <Modal content={modalContent}/>} */}
        </>
    )
}

export default Shuffle15;