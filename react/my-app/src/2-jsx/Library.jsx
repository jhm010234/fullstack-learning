import React from "react";
import Book from "./Book";

function Library() {
  return (
    <div>
      <Book name="리액트 기초" price={3000}></Book>
      <Book name="노드JS 기초" price={4000}></Book>
      <Book name="AWS 기초" price={5000}></Book>
    </div>
  );
}

export default Library;
