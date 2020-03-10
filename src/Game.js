import React from 'react';

class Square extends React.Component {

    render() {
        return (
            <button></button>
        )
    }
}

class Board extends React.Component {
    render() {
        return (
            <div id="game-board">
                <button></button>
            </div>
        )
    }
}

class Game extends React.Component {

    render() {
        return (
            <div>
                <Board />
            </div>
        )
    }
}

export default Game;