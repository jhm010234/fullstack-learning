import React from "react";

//클래스형 컴포넌트
class GreetingClass extends React.Component {
  render() {
    // 오버라이딩 (over ride) : 부모클래스의 함수를 자식 클래스가 재정의
    // 오버로딩 (over loading) : 함수(메서드)의 매개 변수의 갯수의 타입을 다르게 함으로 확장하는 것.
    return <h1>Hello React! {this.props.name}</h1>;
  }
}

//함수형 컴포넌트
function GreetingFunc(props) {
  return <h1>Hello React! {props.name}</h1>;
}
