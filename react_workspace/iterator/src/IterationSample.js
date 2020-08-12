import React, { Component } from "react";

class IterationSample extends Component {
  // 초기화
  constructor(props) {
    super(props);
    this.state = {
      names: [
        { id: 1, text: "눈사람" },
        { id: 2, text: "얼음" },
        { id: 3, text: "눈" },
        { id: 4, text: "바람" },
      ],
      inputText: "",
      nextId: 5,
    };
  }

  onChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  onAppend = () => {
    const { names, nextId, inputText } = this.state; // 미리 선언하면 this.state. 생략 가능
    this.setState({
      // concat은 배열이나 스트링을 뒤에 붙이는 함수
      names: names.concat({ id: nextId, text: inputText }),
      inputText: "",
      nextId: nextId + 1,
    });
  };

  // 삭제할 키값인 id가 있어야 함
  onRemove = (id) => {
    const { names } = this.state;
    // filter(): 조건에 맞는 새로운 배열을 리턴하는 함수
    const nextNames = names.filter((name) => name.id !== id);
    this.setState({
      names: nextNames,
    });
  };

  render() {
    const { names, inputText } = this.state;
    const namesList = names.map((name) => (
      <li key={name.id} onDoubleClick={() => this.onRemove(name.id)}>
        {name.text}
        <button onClick={()=>this.onRemove(name.id)}>삭제</button>
      </li>
    ));
    return (
      <div>
        <input value={inputText} onChange={this.onChange} />
        <button onClick={this.onAppend}>추가</button>
        <ul>{namesList}</ul>
      </div>
    );
  }
}

export default IterationSample;
