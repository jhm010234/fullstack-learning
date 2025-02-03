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

export default E1;
//export { E1, E2 };
