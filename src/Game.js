import React from 'react';
import './css/Game.css'

class Square extends React.Component {

    render() {
        return (
            <button className="square"
                onClick={this.props.onClick}
                >{this.props.value}</button>
        )
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isNextX: true,
            squares: Array(9).fill(null)
        }
    }
    renderSquare(i) {
        return (
            <Square 
                onClick={() => this.handleClick(i)} 
                value={this.state.squares[i]}
            />
        )
    }

    handleClick(i) {
        const copy = this.state.squares.slice();
        if (copy[i]) {
            return;
        }
        copy[i] = this.state.isNextX ? 'X' : 'O';
    

        this.setState({
            squares: copy,
            isNextX: !this.state.isNextX
        })
    }

    render() {
        return (
            <div id="game-board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
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
export { Clock };