//props로 값 전달
function DisplayList(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export function Props1() {
  return (
    <div>
      <DisplayList title="과일 목록" items={["사과", "바나나", "포도"]} />
      <DisplayList
        title="언어 목록"
        items={["자바스크립트", "파이썬", "자바"]}
      />
    </div>
  );
}

//props로 함수 전달
function Button(props) {
  return <button onClick={props.onClickFunc}>클릭하세요</button>;
}

export function Props2() {
  function handleClick() {
    alert("버튼 클릭되었습니다");
  }

  return (
    <div>
      <Button onClickFunc={handleClick} />
    </div>
  );
}

//기본 props 설정
function Greeting(props) {
  return <h1>안녕하세요. {props.name}님! </h1>;
}

//기본 props를 설정 할 수 있음
Greeting.defaultProps = {
  name: "손님",
};
export function Props3() {
  return (
    <div>
      <Greeting name="홍길동" />
      <Greeting />
    </div>
  );
}

//객체와 구조 분해할당으로 props 전달
function Profile({ name, age, job }) {
  return (
    <div>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>직업 : {job}</p>
    </div>
    // function Profile(props) {
    //   return <p>이름: {props.name}</p>;
    // } 위 문법과 같음
  );
}

export function Props4() {
  const user = {
    name: "이영희",
    age: 28,
    job: "개발자",
  };
  return <Profile {...user} />;
  //객체의 모든 속성을 props로 전달하는 문법으로 아래와 같음
  //<Profile name="이영희" age={28} job="개발자" />
}

//children으로 props 전달하기
//props.children은 컴포넌트 태그 안에 넣은 모든 내용을 가져오는 특수한 props
//부모 컴포넌트에서 <컴포넌트>여기 내용</컴포넌트>처럼 태그 안에 작성된 요소들이 props.children으로 전달됨.
function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export function Props5() {
  return (
    <Card title="카드 제목">
      <p>카드 내용입니다.</p>
      <button>자세히 보기</button>
    </Card>
  );
}
