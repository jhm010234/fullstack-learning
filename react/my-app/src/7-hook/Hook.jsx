import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";

export function Counter1() {
  let count = 0;

  return (
    <div>
      {/* {리랜더링에 안되는 이유 발생} */}
      <h1>Counter: {count}</h1>
      <button onClick={() => count + 1}>증가</button>
    </div>
  );
}

export function Counter2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 상태 변수가 업데이트시 리렌더링됨 */}
      <h1>Counter: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
    </div>
  );
}

export function Counter3() {
  const [count, setCount] = useState(0);

  //마운트시 콜백
  useEffect(() => {
    console.log("컴포넌트가 마운트 되었습니다");
  }, []);

  //언마운트시 콜백
  useEffect(() => {
    return () => {
      console.log("컴포넌트가 언마운트 되었습니다");
    };
  }, []);

  useEffect(() => {
    console.log("컴포넌트 업데이트 되었습니다");
  }, [count]); //의존성 변수(배열)

  return (
    <div>
      <p>총 {count}번 클릭했습니다</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
    </div>
  );
}

export function Counter4() {
  const [number, setNumber] = useState(10);
  const [inputValue, setInputValue] = useState("");

  //number 상태 변수가 변경되지 않는 한, double 값은 재연산되지 않음
  const double = useMemo(() => {
    console.log("두배 연산중...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h1>useMemo</h1>
      <h1>입력한 숫자 : {number}</h1>
      <h2>두 배 결과 : {double}</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="입력하세요."
      />
    </div>
  );
}

export function Counter5() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");

  //number 상태 변수가 변경되지 않는 한, double 값은 재연산되지 않음
  const double = useMemo(() => {
    console.log("두배 연산중...");
    return number * 2;
  }, [number]);

  //useCallback 사용
  //e는 js 이벤트 객체로, 이벤트 함수에서 전달됨
  const handleNumberChange = useCallback(
    (e) => {
      console.log("useCallback 메모리제이션1");
      setNumber(parseInt(e.target.value));
    },
    [number]
  );

  const handleInputChange = useCallback(
    (e) => {
      console.log("useCallback 메모리제이션2");
      setInputValue(e.target.value);
    },
    [inputValue]
  );

  return (
    <div>
      <h1>useCallback</h1>
      <h1>입력한 숫자 : {number}</h1>
      <h2>두 배 결과 : {double}</h2>

      <input type="number" value={number} onChange={handleNumberChange} />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="입력하세요."
      />
    </div>
  );
}

export function Counter6() {
  const [count, setCount] = useState(0);
  const clickCountRef = useRef(0); //useRef로 클릭 횟수 관리
  //clickCountRef는 컴퍼넌트가 리랜더링 될 때 값이 초기화 되지 않는다
  //count는 리렌더링 시 화면에 즉시 반영하지만,
  //clickCountRef는 리렌더링시 발생시키지 않고 값만 유지

  const handleClick = () => {
    setCount(count + 1); // 이 부분 주석처리하면 리랜더링 되지 않음
    clickCountRef.current += 1; //A+=B A=A+B
    console.log("총 클릭 횟수:", clickCountRef.current);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>버튼 클릭 횟수: {clickCountRef.current}</h2>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}

export function Counter7() {
  const [count, setCount] = useState(0);
  const clickCountRef = useRef(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    setCount(count + 1); //상태 변경은 react에서 비동기적으로 이루어짐
    clickCountRef.current += 1;
    console.log("총 클릭 횟수", clickCountRef.current);

    //버튼 클릭시 입력창에 포커스 설정
    if (inputRef.current) {
      inputRef.current.value = `현재 카운트 : ${count + 1}`;
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>버튼 클릭 횟수 : {clickCountRef.current}</h2>

      <input type="text" ref={inputRef} placeholder="여기에 입력하세요." />
      <br />
      <button onClick={handleClick}>증가 및 입력창 포커스</button>
    </div>
  );
}
