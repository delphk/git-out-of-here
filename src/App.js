import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Game challengeSize={6} challengeRange={[2, 9]} initialSeconds={15} />
    );
  }
}

export default App;
