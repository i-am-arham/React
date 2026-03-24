import { useState } from "react";

import "./App.css";
import ChildComponent from "./Child";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Count {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <ChildComponent buttontext={"Arham"} />
    </>
  );
}

export default App;
