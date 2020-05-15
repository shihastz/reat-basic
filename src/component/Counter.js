import React, { Component } from "react";
export default class Counter extends Component {
  state = {
    counter: 0,
  };
  onIncrement = ()=> {
      this.setState({
          counter : this.state.counter+1
      })
  }
  onDerement = ()=> {
    this.setState({
        counter : this.state.counter-1
    })
}

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <h3>{this.state.counter}</h3>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDerement}>-</button>
      </div>
    );
  }
}
