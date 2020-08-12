// 리액트는 함수형식, 클래스 형식으로 만들 수 있다.
// 함수 형식

import React from "react"; // required("react")
// import logo from './logo.svg';
// import './App.css';

function App() {
  const name = "리액트";
  const size = "100";
  const color = "green";
  // 삼항 연산자: 조건 ? 참 : 거짓
  // JSX Wellformed - root element only one
  //                - element 중첩 허용 안함
  //                - <시작>contents</종료> 또는 <시작/>
  //                - 대소문자 구분
  //                - <시작 attribute="value" 또는 attribute='value' />
  // class -> className  예) <div className="..." />
  return (
    <div>
      {/* JSX: html(text), {ES6(변수, 로직)} */}
      {/* JSX는 같다를 ===으로 써야함 */}
      {/* name이 리액트가 아니면 공백을 출력하는 두 가지 방법 */}
      <h1>1. Hello</h1> {name === "리액트" ? <h2>{name}</h2> : null}
      <h1>2. Hello</h1> {name === "리액트" && <h2>리액트임</h2>}
      <font size={size} color={color}>
        fontsize
      </font>
    </div>

    // <div className="App"> {/* div class="App" */}
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         안녕! react app 완성!
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
  );
}

export default App;
