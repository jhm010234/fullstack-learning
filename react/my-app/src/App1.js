//import "./App.css";
//import * as E from "./1-element/Element";
import * as A from "./1-element/Ex";

function App() {
  //return E.E6;
  //return <E.Hello />;
  return (
    <>
      <A.Namecard />
      <A.Greeting name="홍길동" age="25살" />
      {A.Data}
    </>
  );
}

export default App;
