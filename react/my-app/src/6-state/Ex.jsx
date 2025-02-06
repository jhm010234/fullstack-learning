// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트

import { useState } from "react";

export function Ex1() {
  const [text, setText] = useState("");

  return (
    <div>
      <h4>텍스트를 입력하세요</h4>
      <input
        type="text"
        onChange={(event) => {
          //event.target → 이벤트가 발생한 요소 (<input> 태그)를 가리킴.
          //event.target.value → <input> 태그의 현재 입력된 값.
          setText(event.target.value);
        }}
      />
      <p>결과 : {text}</p>
    </div>
  );
}

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.

export function Ex2() {
  const [color, setColor] = useState("white");
  const [index, setIndex] = useState(0);

  const backgroundColorList = ["red", "green", "blue"];

  // 1 red
  // 2 green
  // 3 blue
  // 4 red
  // 5 green
  // 6 blue

  return (
    <div
      style={{
        width: 1000,
        height: 1000,
        margin: 0,
        padding: 0,
        backgroundColor: color,
      }}
    >
      <button
        onClick={() => {
          if (color === "white") {
            setColor("red");
            setIndex(index + 1);
          } else {
            setIndex((preIndex) => preIndex + 1);
            setColor(backgroundColorList[index % 3]);
          }
          console.log("버튼 클릭됨");
          console.log(index);
        }}
      >
        색상 변경
      </button>
    </div>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용

export function Ex3() {
  const [checked, setCheck] = useState(false);

  return (
    <div>
      <p>3번</p>
      <input
        type="checkbox"
        name="check"
        id="check"
        onChange={(event) => {
          setCheck(event.target.checked);
        }}
      />
      <p>결과 : {checked ? <span>true</span> : <span>false</span>}</p>
    </div>
  );
}

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.
export function Ex4() {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <h3>4번</h3>
      <p>최종 값 : {total}</p>
      <button
        onClick={() => {
          if (total < 10) {
            setTotal(total + 1);
          } else {
            alert("더 이상 증가가 안됩니다.");
          }
        }}
      >
        +1 증가
      </button>
    </div>
  );
}

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]

export function Ex5() {
  const [value, setvalue] = useState("");
  const [list, setList] = useState([]);

  return (
    <div>
      <h3>5번</h3>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setvalue(event.target.value);
        }}
      />
      <br />
      <p>{value}</p>
      <button
        onClick={() => {
          setList([...list, value]);
        }}
      >
        리스트에 추가!
      </button>

      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
