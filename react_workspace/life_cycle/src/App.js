import React from "react"; 
import LifeCycleSample from "./LifeCycleSample"

function getRandomColor(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

class App extends React.Component{ // import에 {component} 해도 됨 !!
  state={
    color : '#000000',
  }
  handelClick=()=>{
    this.setState({
      color:getRandomColor(),
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.handelClick}>랜덤 색상 생성</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
