// 연습문제1: 간단한 인사말 출력하기
// 목표: props로 받은 이름을 화면에 출력하는 간단한 컴포넌트 연습
// 요구사항
// 1. Hello 컴포넌트를 만들고, name이라는 props로 받은 값을 화면에
// "안녕하세요, [name]님!"이라고 출력하세요.

export function Hello(props) {
  return (
    <>
      <h1>연습문제 1번</h1>
      <p>안녕하세요, {props.name}님!</p>
    </>
  );
}

// 연습문제2: 간단한 계산기
// 목표: 두 개의 숫자(props)를 받아 합을 계산하여
// 화면에 출력하는 컴포넌트
// 요구사항
// 1. num1과 num2라는 props를 받아 두 값을 더한 결과를
// 출력하는 Sum 컴포넌트를 만들어 보세요.

export function Sum(props) {
  return (
    <>
      <h1>연습문제 2번</h1>
      <p>
        {props.num1}+{props.num2}={props.num1 + props.num2}
      </p>
    </>
  );
}

// 연습문제3: 간단한 자동판매기
// 목표: 받은 금액에 따라 자동으로 음료를 결정하고
// 출력하는 컴포넌트 연습
// 요구사항
// 1. DrinkMachine 컴포넌트를 만들고, price라는
// props로 받은 금액에 따라 아래와 같이 출력하세요.
// 2. 1000원: "콜라"
// 3. 2000원: "사이다"
// 4. 그 외 금액: "물"

export function DrinkMachine(props) {
  if (props.price == 1000) {
    return (
      <>
        <h1>연습문제 3번</h1>
        <p>props 받은 금액은 {props.price}원</p>
        <p>콜라</p>
      </>
    );
  } else if (props.price == 2000) {
    return (
      <>
        <h1>연습문제 3번</h1>
        <p>props 받은 금액은 {props.price}원</p>
        <p>사이다</p>
      </>
    );
  } else {
    return (
      <>
        <h1>연습문제 3번</h1>
        <p>props 받은 금액은 {props.price}원</p>
        <p>물</p>
      </>
    );
  }
}

// 연습문제4: 조건부 인사말 출력하기
// 목표: 시간에 따라 다른 인사말을 출력하는 컴포넌트를 작성합니다.
// 요구사항
// Greeting 컴포넌트를 만들고, hour라는 props로 받은 시간에 따라 아래와 같이 인사말을 출력하세요.
// 오전 (5시~11시): "좋은 아침입니다!"
// 오후 (12시~17시): "좋은 오후입니다!"
// 저녁/밤 (18시~4시): "좋은 저녁입니다!"

export function Greeting(props) {
  if (props.hour >= 5 && props.hour <= 11) {
    return (
      <>
        <h1>연습문제 4번</h1>
        <p>선택된 시간 {props.hour}시, 좋은 아침입니다!</p>
      </>
    );
  } else if (props.hour >= 12 && props.hour <= 17) {
    return (
      <>
        <h1>연습문제 4번</h1>
        <p>선택된 시간 {props.hour}시, 좋은 오후입니다!</p>
      </>
    );
  } else {
    return (
      <>
        <h1>연습문제 4번</h1>
        <p>선택된 시간 {props.hour}시, 좋은 저녁입니다!</p>
      </>
    );
  }
}
