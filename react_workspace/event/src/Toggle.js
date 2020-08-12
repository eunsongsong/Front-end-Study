import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      displayData: "",
    };

    // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
    this.handleClick = this.handleClick.bind(this);
  }
  // 2. event handler 작성
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  // 1. click event 선택
  // 3. event source button에 handler 등록
  render() {
    // const {displayData} = this.state;
    // let input_str = document.getElementById("message").value;
    return (
      <div>
        <h1>1.</h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <br></br>
        <br></br>
        <h1>2.</h1>
        <input type="text" name="displayData" value={this.state.message} 
        onChange={
          (e) => {
            this.setState({
              displayData: e.target.value
            })
          }
        }>
        </input>
        <button onClick={() => {
            this.setState({
              displayData: "",
            });
          }}>clear</button>
        <p>{this.state.displayData}</p>
      </div>
    );
  }
}

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

export default Toggle;
