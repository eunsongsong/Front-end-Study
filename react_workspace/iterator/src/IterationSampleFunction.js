import React, { useState } from "react";

const IterationSampleFunction = () => {
  // 초기화
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  // 데이터 추가 기능
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const namesList = names.map((name) => (
    <li key={name.id} >
      {name.text}
      <button onClick={() => onRemove(name.id)}>삭제</button>
    </li>
  ));
  // 화면
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </div>
  );
};

export default IterationSampleFunction;
