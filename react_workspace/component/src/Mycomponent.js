import React, { Component } from "react";
import PropTypes from "prop-types";

// 1. 파일 생성 -> 2. class rendering Code 작성 -> 3. export
class Mycomponent extends Component {
  // defaultProps는 props 값을 따로 지정하지 않았을 때 보여줄 기본값을 설정
  static defaultProps = {
    name: "익명",
    age: "비공개",
    major: "비공개",
  };

  // propTypes는 필수 props를 지정하거나 props의 타입을 지정할 때 사용
  static propTypes = {
    name: PropTypes.string.isRequired, // isRequired: 필수 propTypes를 설정
    age: PropTypes.number,
    major: PropTypes.string,
  };

  render() {
    const { name, age, major } = this.props;
    return (
      <div>
        <h2>이름: {name}</h2>
        <h2>나이: {age}</h2>
        <h2>전공: {major}</h2>
      </div>
    );
  }
}

// defaultProps를 클래스 밖에 선언해도 됨
// Mycomponent.defaultProps={
//   name: "익명",
//   age: "비공개",
//   major: "없음"
// };

// 다른 컴포넌트에서 사용 가능하도록!!
export default Mycomponent;




/**
 * class A {
 * memberV=0;
 * static staticV = 0;
 * }
 * A a1 = new A();
 * a1.memberV
 * A a2 = new A();
 * a2.staticV
 * 
 * // 스태딕 variable은 이미 초기화 되었으므로 A.staticV로 쓸 수 있다
 * A.staticV++ // 1 - staticV는 이미 0으로 초기화 되어있음
 * A.staticV++ // 2
 * // 스태틱은 모든 객체가 공유할 수 있는 전역 변수
 */

