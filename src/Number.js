import React, { Component } from "react";

class Number extends Component {
  render() {
    return <div className="number">{this.props.value}</div>;
  }
}

export default Number;
