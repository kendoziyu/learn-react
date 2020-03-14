import React from 'react';
import './css/Game.css'

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
            <div className="board-row">
                <button>0</button>
                <button>1</button>
                <button>2</button>
            </div>
            <div className="board-row">
                <button>3</button>
                <button>4</button>
                <button>5</button>
            </div>
            <div className="board-row">
                <button>6</button>
                <button>7</button>
                <button>8</button>
            </div>
        </div>
        )
    }
}

class Clock extends React.Component {
    render() {
        return (
            <p>It's 12:00:00 PM</p>
        )
    }
}
class Game extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <p className="status">Next Player: X</p>
                </div>
                <Board />
                <Clock />
            </div>
        )
    }
}

export default Game;