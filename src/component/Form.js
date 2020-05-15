import React, { Component } from "react";

export default class Form extends Component {
    // state = {
    //     firstName : "",
    //     secondfgddName : ""
    // }

    onHandleChange = (event) =>{
        //console.log(event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onSubmit = (event) =>{
        console.log(this.state)
    }
  render() {
    return (
      <form>
          <hr/>
        <h2>Form Component</h2>
        <input type="text" name="firstName" onChange={this.onHandleChange} />
        <input type="text" name="secondName" onChange={this.onHandleChange} />
        <button type="button" onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}
