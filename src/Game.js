import React, { Component } from "react";
import Number from "./Number";
import { randomNumberBetween } from "./utils/utils";
import _ from "lodash";

class Game extends Component {
  state = {
    gameStatus: "won",
    remainingSeconds: this.props.initialSeconds,
    selectedIds: []
  };

  static bgColors = {
    playing: "#ccc",
    won: "green",
    lost: "red"
  };

  challengeNumbers = Array.from({ length: this.props.challengeSize }).map(() =>
    randomNumberBetween(...this.props.challengeRange)
  );

  target = _.sampleSize(
    this.challengeNumbers,
    this.props.challengeSize - 2
  ).reduce((acc, curr) => acc + curr);

  isNumberAvailable = index => this.state.selectedIds.indexOf(index) === -1;

  render() {
    let { gameStatus, remainingSeconds } = this.state;
    return (
      <div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in {this.props.initialSeconds}{" "}
          seconds
        </div>
        <div
          className="target"
          style={{ backgroundColor: Game.bgColors[gameStatus] }}
        >
          {this.target}
        </div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((num, index) => (
            <Number
              key={index}
              id={index}
              value={gameStatus === "new" ? "?" : num}
              clickable={this.isNumberAvailable(index)}
            />
          ))}
        </div>
        <div className="footer">
          {gameStatus === "new" ? (
            <button>Start</button>
          ) : (
            <div className="timer-value">{remainingSeconds}</div>
          )}

          {["won", "lost"].includes(gameStatus) && <button>Play Again</button>}
        </div>
      </div>
    );
  }
}

export default Game;
