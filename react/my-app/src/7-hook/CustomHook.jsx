import React, { useState } from "react";

//커스텀 후 정의
function useCounter(initValue = 0) {
  const [count, setCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);

  const decrease = () => setCount((prev) => prev - 1);

  const reset = () => setCount(initValue);

  return { count, increase, decrease, reset };
}

//원래는 파일 단위로 만들기 때문에
//따로 임포트 해야 함

//커스텀 훅 인포트
//import useCounter from "./useCounter"

export function Counter() {
  const { count, increase, decrease, reset } = useCounter(0);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <button onClick={reset}>리셋</button>
    </div>
  );
}

export default Counter;
