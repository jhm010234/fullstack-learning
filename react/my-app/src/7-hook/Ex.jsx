import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

//연습문제 1: 숫자 배열의 평균값 구하기 (useMemo 사용)
// 목표:
// 사용자가 입력하는 숫자들을 배열에 추가하고, 배열의 평균값을 **useMemo**로
//   최적화하여 불필요한 재계산을 방지하세요.
// 힌트:
// 배열에 새로운 숫자가 추가될 때만 평균값을 재계산해야 합니다.
// 평균값을 구하려면 배열의 합을 배열의 길이로 나누면 됩니다.

export function Ex1() {
  const [inputValue, setInputValue] = useState(0);
  const [list, setList] = useState([]);
  let sum = 0;
  let average;

  const calAverage = useMemo(() => {
    if (list.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < list.length; i++) {
        sum += list[i];
        console.log(sum);

        return sum;
      }
      const average = sum / list.length;
      return average;
    }
  }, [list]);

  // //1. 입력한 숫자를 배열에 추가
  // const calcuateAverage = useMemo(() => {
  //   const sum = 0;
  //   list.map((item) => {
  //     return (sum += item);
  //   });
  // });

  return (
    <div>
      <input
        type="text"
        placeholder="숫자를 입력하세요"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setList([...list, Number(inputValue)]);
          console.log(list);
        }}
      >
        배열에 추가하기
      </button>
      <br />
      <p>입력한 값: {inputValue}</p>
      <p>배열 값: {setList}</p>
      <p>배열에 평균값은 {average}입니다</p>
    </div>
  );
}

// 연습문제 2: 버튼 클릭 시 숫자 증가하기 (useCallback)
// 목표:
// 1. 숫자를 상태로 관리하고, 버튼을 클릭할 때마다 숫자가 1씩 증가합니다.
// 2. useCallback을 사용하여 버튼 클릭 핸들러가 컴포넌트가 리렌더링될 때마다 새로 생성되지 않도록 최적화하세요.

export function Ex2() {
  const [count, setCount] = useState(0);

  const addCount = useCallback(() => {
    setCount(count + 1);
    console.log("+1 증가했습니다");
  }, [count]);
  //빈 배열을 통해 컴포넌트가 리렌더링되어도 addCount 함수가 새로 만들어지지 않게 함

  return (
    <div>
      <h3>현재 숫자 : {count}</h3>
      <button onClick={addCount}>+1 증가</button>
    </div>
  );
}

// 연습문제 3: 입력창 초기화하기 (useRef)
// 목표:
// 사용자가 입력한 텍스트를 버튼 클릭 시 초기화하고, 입력창에 포커스를 다시 설정합니다.
// **useRef**를 사용하여 입력창을 제어하세요.
// 힌트:
// 입력창에 접근하기 위해 **useRef**로 참조를 생성하세요.
// **inputRef.current.value**를 이용해 입력 값을 초기화하고, **inputRef.current.focus()**로 포커스를 설정합니다.

export function Ex3() {
  const inputRef = useRef(null);

  const resetValue = () => {
    //포커스
    inputRef.current.focus();
    console.log("입력칸에 포커스가 되었습니다");

    //초기화
    inputRef.current.value = "";
    console.log("입력한 텍스트가 지워졌습니다");
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={resetValue}>초기화</button>
    </div>
  );
}
