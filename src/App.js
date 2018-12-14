import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Game challengeSize={6} challengeRange={[2, 15]} initialSeconds={10} />
    );
  }
}

export default App;
