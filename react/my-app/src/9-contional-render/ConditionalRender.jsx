import React, { useState } from "react";

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  //1.If문 사용
  if (isLoggedIn == "true") {
    return <h3>환영합니다</h3>;
  } else {
    return <h3>로그인이 필요합니다.</h3>;
  }
}

export function Conditional1(props) {
  return <Greeting isLoggedIn={props.isLoggedIn} />;
}

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
    color: "green",
  },
};

function Toolbar(props) {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  return (
    <div style={styles.wrapper}>
      {/* 2.논리 연산자 && 사용 */}
      {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>}
      {/* 3.논리 연산자 && 사용 */}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}

export function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };

  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>랜딩 페이지에 오신 것을 환영합니다.</div>
    </div>
  );
}
