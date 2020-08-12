import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: "",
      result: 0,
    };
  }
  render() {
    const { operator, result } = this.state;
    return (
      <div>
        <h1>
          20 {operator} 10 = {result}
        </h1>
        <button
          onClick={() => {
            this.setState({
              operator: "+",
              result: 20 + 10,
            });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.setState({
              operator: "-",
              result: 20 - 10,
            });
          }}
        >
          Sub
        </button>
        <button
          onClick={() => {
            this.setState({
              operator: "*",
              result: 20 * 10,
            });
          }}
        >
          Mul
        </button>
        <button
          onClick={() => {
            this.setState({
              operator: "/",
              result: 20 / 10,
            });
          }}
        >
          Div
        </button>
      </div>
    );
  }
}

export default Calculator;
