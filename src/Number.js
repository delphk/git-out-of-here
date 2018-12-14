import React, { Component } from "react";

class Number extends Component {
  render() {
    return (
      <button
        className="number"
        style={{ opacity: this.props.clickable ? 1 : 0.3 }}
        disabled={!this.props.clickable}
        onClick={() => this.props.selectNumber(this.props.id)}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Number;
