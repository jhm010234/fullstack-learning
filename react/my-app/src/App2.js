import React from "react";
import { Hello, Sum, DrinkMachine, Greeting } from "./2-jsx/Ex";

function App() {
  return (
    <>
      <Hello name="홍길동" />
      <Sum num1={8} num2={7} />
      <DrinkMachine price="750" />
      <Greeting hour={13} />
    </>
  );
}

export default App;
