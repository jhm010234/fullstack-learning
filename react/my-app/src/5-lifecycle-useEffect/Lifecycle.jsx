import React, { Component, useEffect, useState } from "react";

//LifecycleClass가 자식
class LifecycleClass extends Component {
  //자식 클래스의 생성자
  constructor(props) {
    super(props); //부모 생성자 함수 호출
    //super()를 호출하지 않으면 this.props를 사용할 수 없음.

    //상태 변수 선언
    //this.state란?
    //클래스형 컴포넌트에서 변경 가능한 값(상태, state)을 저장하는 객체.
    this.state = {
      count: 0,
    };
  }
  //아래는 부모 클래스에서 자동으로 호출해줌
  //마운트 발생시 호출되는 함수
  componentDidMount() {
    console.log("컴퍼넌트가 마운트 되었습니다");
  }

  //언마운트 발생시 호출됨
  componentWillUnmount() {
    console.log("컴퍼넌트가 언마운트 되었습니다");
  }

  //상태나 props가 변경시 호출됨
  componentDidUpdate() {
    console.log(`컴퍼넌트가 업데이트되었습니다. ${this.state.count}`);
  }

  render() {
    return (
      <div>
        <h1>리액트 라이프사이클 (클래스형)</h1>
        <p>Count : {this.state.count}</p>
        <button
          onClick={() => {
            //왜 화살표 함수 사용?
            //이벤트 핸들러에서 this가 바뀌는 문제를 방지하기 위해!
            //일반 함수(function)을 쓰면 this가 undefined가 될 수도 있음.

            //setState : 클래스형 컴퍼넌트의 상태 변경 함수
            //this.state.count = this.state.count + 1; 이렇게 직접 변경하면 안 됨!
            // setState()를 사용해야 리액트가 변경을 감지하고 자동으로 화면을 업데이트해줌.
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default LifecycleClass;

// 함수형 컴포넌트에서는 useEffect Hook로 라이프사이클을 관리
// useEffect는 다음과 같은 역할을 할 수 있습니다:
// useEffect(() => {}, []): 컴포넌트가 마운트될 때 실행
// useEffect(() => {}, [state]): 의존성 배열이 변경될 때 실행
// return () => {}: 컴포넌트가 언마운트될 때 실행 (클린업 함수)

//함수형 컴포넌트
export function LifecycleFunc() {
  // 상태변수 , 상태설정함수   초기값
  const [count, setcount] = useState(0);

  //마운트&언마운트
  useEffect(() => {
    console.log("컴퍼넌트가 마운트 되었습니다.");
    return () => {
      console.log("컴퍼넌트가 언마운트 되었습니다.");
    };
  }, []); //빈 배열을 넣으면 재랜더링시 마운트 언마운트 구동 안함

  //업데이트

  useEffect(() => {
    console.log("컴퍼넌트가 업데이트되었습니다.");
  }, [count]);
  //의존성 상태변수 count 배열을 설정

  return (
    <div>
      <h1>리액트 라이프사이클 (함수형 컴퍼넌트 방식)</h1>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

//부모 컴포넌트
export function Lifecycle() {
  const [showComponent, setShowComponent] = useState(true);

  //조건부 렌더링
  //1. if else
  //2. 삼항연산자
  //3. 논리연산자(&& ||)

  return (
    <div style={{ padding: 20 }}>
      {
        showComponent && <LifecycleFunc />
        //showComponent가 true면 LifecycleClass를 보여줌.
        //false면 LifecycleClass가 화면에서 사라짐 (componentWillUnmount() 실행).
      }
      <button
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        {showComponent ? "컴퍼넌트 제거" : "컴퍼넌트 추가"}
      </button>
    </div>
  );
}
