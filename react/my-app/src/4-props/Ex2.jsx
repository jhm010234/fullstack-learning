import { useState } from "react";
// Ex2.jsx
// 문제 1: 조건부 렌더링과 단일 Props
// 목표: 특정 조건에 따라 다른 인삿말을 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - Greeting이라는 컴포넌트를 만드세요.
// - props로 name과 isMorning을 받아 인삿말을 출력합니다.
// - isMorning이 true이면 "좋은 아침입니다, [name]님!"
//   그렇지 않으면 "좋은 저녁입니다, [name]님!"
// - 부모 컴포넌트에서 두 가지 경우를 모두 테스트하세요.

function Greeting({ name, isMorning }) {
  return isMorning
    ? `좋은 아침입니다, ${name}님!`
    : `좋은 저녁입니다, ${name}님!`;
}

export function Ex1() {
  return (
    <>
      <Greeting name="홍길동" isMorning={true} />
      <br />
      <Greeting name="이순신" isMorning={false} />
    </>
  );
}
//문제 2: 사용자 상태 변화 관리
// 목표: 버튼 클릭에 따라 사용자 나이를 변경하는 컴포넌트를 작성하세요.
// 요구사항:
// - UserCard라는 컴포넌트를 작성하세요.
// - name, age를 props로 받아 초기 값을 표시합니다.
// - "한 살 더 먹기" 버튼을 클릭하면 나이가 증가합니다.
// - 부모 컴포넌트에서 두 명의 사용자 상태를 관리합니다.

function UserCard({ name, age }) {
  const [userAge, setUserAge] = useState(age);

  function onClickFunc() {
    return setUserAge(userAge + 1);
  }

  return (
    <div>
      <p>{name}</p>
      <p>{userAge}</p>
      <button onClick={onClickFunc}>1살 증가</button>
    </div>
  );
}

export function Ex2() {
  return (
    <>
      <UserCard name="홍길동" age={20}></UserCard>
      <UserCard name="이순신" age={30}></UserCard>
    </>
  );
}
