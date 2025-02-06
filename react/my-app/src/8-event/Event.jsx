import React, { useState } from "react";

export function Event1() {
  const [message, setMessage] = useState("버튼을 클릭하세요");

  const handleClick = () => {
    setMessage("버튼이 클릭되었습니다!");
  };

  const style = { textAlign: "center", marginTop: 50 };

  return (
    <div style={style}>
      <h3>{message}</h3>
      {/* handleClick(): 즉시 실행이 되므로 주의 */}
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}

export function Event2() {
  const [message, setMessage] = useState("버튼을 클릭하세요");

  const handleClick = (event, id) => {
    event.preventDefault(); //이벤트 기본동작을 방지
    setMessage(`버튼 ${id}이 클릭됨`);
  };
  return (
    <div>
      <h3>{message}</h3>
      {/* 이벤트 함수는 이벤트 객체를 전달 받을 수 있음 */}
      <button type="button" onClick={(event) => handleClick(event, 1)}>
        첫번째 버튼
      </button>
      <button type="button" onClick={(event) => handleClick(event, 2)}>
        두번째 버튼
      </button>
    </div>
  );
}
