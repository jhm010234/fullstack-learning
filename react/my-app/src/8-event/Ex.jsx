//연습문제1: 마우스 오버와 마우스 아웃 이벤트
// 목표: onMouseEnter와 onMouseLeave 이벤트를 사용하여
//  마우스가 특정 영역에 들어오거나 나갈 때 상태를 변경하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 마우스가 박스 위에 올라가면 배경색이 변경됩니다.
// 마우스가 박스를 벗어나면 원래 배경색으로 돌아옵니다.
// 상태로 관리되는 메시지를 화면에 출력하세요.
// (예: "마우스가 들어왔습니다", "마우스가 나갔습니다")

import { useRef, useState } from "react";

export function Ex1() {
  const [mouseState, setMouseState] = useState("");
  const [color, setColor] = useState("pink");
  const divStyle = { width: 500, height: 500, background: color };

  const handleMouseEnter = () => {
    setMouseState("마우스가 들어왔습니다");
    setColor("cyan");
  };

  const handleMouseLeave = () => {
    setMouseState("마우스가 나갔습니다");
    setColor("pink");
  };

  return (
    <div
      style={divStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p style={{ textAlign: "center", paddingTop: 230 }}>{mouseState}</p>
    </div>
  );
}

//연습문제2: 폼 제출 이벤트 처리하기
// 목표: onSubmit 이벤트를 통해 폼 제출을 처리하고 기본 동작을 방지하는 방법
//요구사항 - 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자 이름과 나이를 입력하는 폼을 만드세요.
// 2.폼이 제출되면 입력값을 콘솔에 출력하고 입력 필드를 비웁니다.
// 3.기본 폼 제출 동작을 방지하세요 (e.preventDefault() 사용).

export function Ex2() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(age);
    inputRef1.current.value = "";
    inputRef2.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>이름</label>
      <br />
      <input
        placeholder="이름을 입력하세요"
        ref={inputRef1}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <label>나이</label>
      <br />
      <input
        placeholder="나이를 입력하세요"
        ref={inputRef2}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      <br />
      <br />
      <button>제출</button>
    </form>
  );
}

// 연습문제 3: 입력 필드에서 글자 수 제한하기
// 목표: 입력 필드의 입력값을 상태로 관리하고 글자 수 제한하는 방법을 학습합니다.
// 요구사항: 다음 조건에 맞는 컴포넌트를 작성하세요.
// 1.사용자가 텍스트를 입력할 수 있는 입력 필드가 있습니다.
// 2.입력값은 최대 10자까지만 허용됩니다.
// 3.입력값의 길이에 따라 남은 글자 수를 화면에 표시하세요.

export function Ex3() {
  let [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(10); //남은 글자 수

  const handleNumber = (event) => {
    // 입력값이 10자를 초과하면 setState를 실행하지 않도록 설정!
    if (event.target.value.length > 10) {
      return;
    }
    setInputValue(event.target.value);
    setCount(10 - event.target.value.length);
  };

  return (
    <div>
      <p>텍스트를 입력하세요</p>
      <input type="text" value={inputValue} onChange={handleNumber} />
      <br />
      <br />
      <p>남은 글자 수: {count}/10</p>
    </div>
  );
}
