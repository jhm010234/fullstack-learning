import React from "react";

//jsx 문법
export const E1 = <h1 className="greeting">Hello JSX</h1>;

//바벨을 통해서 순수 자바스크립트로 변환이 된다.
export const E2 = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello JSX"
);

export const E3 = (
  <div>
    <h1>Hello JSX!</h1>
    <p>This is simple text.</p>
  </div>
);

export const E4 = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Hello JSX!"),
  React.createElement("p", null, "This is simple text.")
);

//조건부 렌더링(JSX 사용)
const isLoggedIn = false;

export const E5 = (
  <div>{isLoggedIn ? <h1>Welcome!</h1> : <h1>Plz Sign in</h1>}</div>
);

export const E6 = React.createElement(
  "div",
  null,
  isLoggedIn
    ? React.createElement("h1", null, "Welcome")
    : React.createElement("h1", null, "Plz Sign in")
);

//list 렌더링
const items = ["Apple", "Banana", "Cherry"];
export const E7 = (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

//react함수로 리스트 렌더링
export const E8 = React.createElement(
  "ul",
  null,
  items.map((item) => {
    return React.createElement();
  })
);
