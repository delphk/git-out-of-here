import React, { Component } from "react";
import Number from "./Number";

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="help">
          Pick 4 numbers that sum to the target in 15 seconds
        </div>
        <div className="target">42</div>
        <div className="challenge-numbers">
          <Number value={8} />
          <Number value={5} />
          <Number value={12} />
          <Number value={13} />
          <Number value={5} />
          <Number value={16} />
        </div>
        <div className="footer">
          <div className="timer-value">15</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default Game;
