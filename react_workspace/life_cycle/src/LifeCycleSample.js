import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null;

  constructor(props) {
    super(props);
    console.log("생성자 호출");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps 호출");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount 호출");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate 호출", nextProps, nextState);
    return nextState % 10 !== 4;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate 호출", prevProps, prevState);
    if (prevProps.color !== prevState.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate 호출", prevProps, prevState, snapshot);
    if (snapshot) {
      console.log("update 직전 생상 ", snapshot);
    }
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    console.log("render 호출");
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        <h1 style={style} ref={(ref) => this.myRef}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
