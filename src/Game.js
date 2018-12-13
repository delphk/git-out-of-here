import React, { Component } from "react";
import Number from "./Number";
import { randomNumberBetween } from "./utils/utils";
import _ from "lodash";

class Game extends Component {
  state = {
    gameStatus: "new",
    remainingSeconds: this.props.initialSeconds,
    selectedIds: []
  };

  challengeNumbers = Array.from({ length: this.props.challengeSize }).map(() =>
    randomNumberBetween(...this.props.challengeRange)
  );

  target = _.sampleSize(
    this.challengeNumbers,
    this.props.challengeSize - 2
  ).reduce((acc, curr) => acc + curr);

  render() {
    return (
      <div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in 15 seconds
        </div>
        <div className="target">{this.target}</div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((num, index) => (
            <Number key={index} value={num} />
          ))}
        </div>
        <div className="footer">
          <div className="timer-value">{this.props.initialSeconds}</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default Game;
