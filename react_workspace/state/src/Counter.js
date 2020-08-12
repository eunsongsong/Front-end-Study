import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // 1. 초기화
    this.state = {
      number: 0,
    };
  }
  render() {
    // 2. state에 정의된 변수는 직접 데이터를 할당할 수 없음 ---> this.setState()로 전달
    const { number } = this.state;
    return (
      <div>
        <h1>Count: {number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          increase
        </button>
      </div>
    );
  }
}

export default Counter;
