import React, { useState } from 'react'
import SmallBox from './SmallBox'

const MainBox = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))//[null,null,------]
    const [nextTurn, setNextTurn] = useState(true);
    const [usedBox, setUsedBox] = useState(Array(9).fill(0));
    // const [gameOver, setGameOver] = useState(false);
    function gameOver() {
        if (!usedBox.includes(0)) {
            return true;
        }
    }
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        const newUsedBox = usedBox.slice();

        if (newUsedBox[i] == 0) {
            if (nextTurn == true) {
                nextSquares[i] = 'X';
                setNextTurn(false);
            }
            else {
                nextSquares[i] = '0';
                setNextTurn(true);
            }
            setSquares(nextSquares);//render component with new array
            newUsedBox[i] = 1;
            setUsedBox(newUsedBox);

        }


    }
    let result = calculateWinner(squares);
    let res;
    if (result) {
        res = "Winner: " + result;
    }
    else if (gameOver()) {
        res = "GameOver";
    }
    else {
        res = "Next player: " + (nextTurn ? 'X' : '0');
    }
    return (
        <>
            <h1>TIC TAC TOE</h1>
            <div className="status">{res}</div>
            <div className='boardRow' >
                {/* passing values as props */}
                <SmallBox value={squares[0]} onSquareClick={() => handleClick(0)} />
                <SmallBox value={squares[1]} onSquareClick={() => handleClick(1)} />
                <SmallBox value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='boardRow'>
                <SmallBox value={squares[3]} onSquareClick={() => handleClick(3)} />
                <SmallBox value={squares[4]} onSquareClick={() => handleClick(4)} />
                <SmallBox value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='boardRow'>
                <SmallBox value={squares[6]} onSquareClick={() => handleClick(6)} />
                <SmallBox value={squares[7]} onSquareClick={() => handleClick(7)} />
                <SmallBox value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>

    );
}
//  Evaluvatinig the winner 
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let small_array of lines) {
        const [a, b, c] = small_array;
        if (squares[a] === squares[b] && squares[b] === squares[c] && squares[c] === squares[a]) {
            return squares[a];
        }
    }
    return null;
}

export default MainBox;
