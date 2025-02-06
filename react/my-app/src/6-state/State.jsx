import React, { useState } from "react";

export function Counter() {
  //const를 사용하는 이유 : 상태 참조 자체가 변경되지 않기 때문
  //setCount를 통해서 상태 변경이 이루어지기 때문
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* {JSX 주석문} */}
      <p>{count}</p>
      {/* {버튼 클릭시 count를 1 증가시키는 이벤트 핸들러} */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        1씩 증가
      </button>
    </div>
  );
}

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={toggleLike}>{liked ? "좋아요 취소" : "좋아요"}</button>
      <p>{liked ? "이 게시물을 좋아합니다." : "좋아요!를 눌러주세요~"}</p>
    </div>
  );
}
