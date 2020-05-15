import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      enable: false,
      textContent: "",
    };
  }
  clickhandler = () => {
    this.setState((prev, props) => ({ counter: prev.counter + 1 }));
  };
  clickhandlernew = () => {
    this.setState((prev, props) => ({ counter: prev.counter - 1 }));
  };
  checkClicked = () => {
    this.setState((prev, props) => ({ enable: !prev.enable }));
  };
  onChangeEvent = (e) => {
    console.log(e.target.value);
    this.setState({ textContent: e.target.value });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>Plus</button>
        <p>{this.state.counter}</p>
        <button onClick={this.clickhandlernew}>Minus</button>

        <input type="checkbox" onClick={this.checkClicked} />
        <p>{this.state.enable ? "enbled" : "disabled"}</p>

        <br />
        <input type="text" onChange={this.onChangeEvent} />
        <b>{this.state.textContent}</b>
      </div>
    );
  }
}
// function click(){
//     alert("hasljf");
// }
// function Demo(){
//     return(
//         //<button onClick={ ()=> {alert("dfg");} }>Click</button>
//         <button onClick={ click  }>Click</button>

//     )
// }
export default Demo;
