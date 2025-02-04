import React from "react";

function Book(props) {
  return (
    <>
      <h1>책의 이름은 {props.name}</h1>
      <h1>책의 가격은 {props.price}</h1>
    </>
  );
}

export default Book;
