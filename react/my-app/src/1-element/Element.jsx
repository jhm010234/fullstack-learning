import React from "react";

const E1 = <h1 className="greeting">리액트 엘리먼트1입니다.</h1>;
export const E2 = React.createElement(
  "h1",
  { className: "greeting" },
  "리액트 엘리먼트2입니다."
);

//jsx에서 js 시작하려면, {}중괄호 사용.
//js에서 style은 k-v 객체로 사용.
export const E3 = <h1 style={{ color: "blue" }}>엘리먼트3</h1>;

const fruits = ["사과", "바나나", "포도"];
export const E4 = (
  <ul>
    {fruits.map((item, index, array) => {
      //{js값 표현식}
      //리액트의 리스트(목록)은 key을 줘야 함
      return <li key={index}>{item}</li>;
    })}
  </ul>
);

//화살표 함수 축약형
export const E5 = (
  <ul>
    {fruits.map((item, index) => {
      //{js값 표현식}
      //리액트의 리스트(목록)은 key을 줘야 함
      return <li key={index}>{item}</li>;
    })}
  </ul>
);

//소괄호 없이 리턴하는 경우
//리턴 뒤에 바로 jsx나 값이 옴

//소괄호로 리턴하는 경우
//여러 요소를 리턴하는 경우, 최상위 단일 요소로 만들어야 됨
function handleClick() {
  alert("버튼이 클릭되었습니다.");
}
export const E6 = (
  <>
    <h1>이벤트 처리</h1>
    <button onClick={handleClick}>클릭하세요</button>
  </>
);

export function Hello(props) {
  //return 문과 같은 줄에 있을 때는 소괄호 필요 없음
  return <h1>안녕하세요. {props.name}</h1>;
}

export function Button(props) {
  return (
    //백틱을 사용하는 이유 : 문자열 타입으로 전달하기 위해
    <button style={{ color: props.color }}>
      <b>{props.children}</b>
    </button>
  );
}
{
  /*jsx 코멘트 : children은 props의 기본 속성*/
}
{
  /*으로 컴퍼넌트 하위 요소를 의미함*/
}

export function ConfirmDialog(props) {
  return (
    <div>
      <p>확인버튼을 눌러주세요.</p>
      <Button color="green">
        <span>확인</span>
        <br />
        <span>버튼</span>
      </Button>
    </div>
  );
}

//내보내기 할 하나의 컴포넌트
export default E1;
//export { E1, E2 }; //하나씩 내보내기
