// Ex.jsx
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.
// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.

import { useEffect, useRef, useState } from "react";

export function Ex1() {
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);
}

// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.

function Click() {}

export function Ex2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`2를 더해서 ${count}이 됐습니다`);
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        클릭해보세요
      </button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용

//setInterval(callback, delay);
// 주어진 delay(ms) 간격마다 callback 함수 실행.
// setTimeout과 달리 한 번이 아니라 계속 실행됨.
// setInterval(() => {
//   console.log("1초마다 실행됨");
// }, 1000); // 1초(1000ms)마다 실행

// clearInterval(intervalID);
// setInterval로 실행 중인 타이머를 중지함.
// clearInterval()을 사용하지 않으면 타이머가 계속 실행됨.

export function Ex3() {
  const [count, setCount] = useState(0);
  const countTime = useRef(0);

  useEffect(() => {
    console.log("타이머 시작");
    return () => {
      console.log("타이머 종료");
    };
  }, []);

  useEffect(() => {
    countTime.current = setInterval(() => {
      console.log("+1초 증가");
      setCount((preCount) => preCount + 1);
    }, 1000);

    return () => {
      clearInterval(countTime.current);
      console.log("타이머 정리");
    };
  }, [count]);

  return (
    <div>
      <h1>타이머</h1>
      <h1 style={{ color: "red" }}>{count}</h1>
      <button
        onClick={() => {
          clearInterval(countTime.current);
          console.log("타이머 종료");
        }}
      >
        타이머 종료
      </button>
    </div>
  );
}

// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener

//event → "click", "keydown", "resize" 등 이벤트 유형을 의미.
// window.addEventListener("scroll", () => {
//   console.log("사용자가 스크롤했습니다!");
// });

export function Ex4() {
  const [width, setWidth] = useState(window.outerWidth);

  useEffect(() => {
    function EditWindow() {
      setWidth(window.outerWidth);
    }
    window.addEventListener("resize", EditWindow);
    console.log(`현재 너비 크기 : ${width}`);
    return () => {
      window.removeEventListener("resize", EditWindow);
    };
  }, [width]);

  return (
    <div>
      <h3>현재 윈도우 창 너비 크기는 {width}입니다</h3>
    </div>
  );
}

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.

export function Ex5() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={index}>
              <b>{item.title}</b>
              <br />
              {item.body}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
