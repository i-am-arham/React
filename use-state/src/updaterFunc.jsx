// updater function = A function passed as an argument to setState() usually
//                                  Allow for safe updates based on the previous state
//                                  Used with multiple state updates and asynchronous functions
//                                  Good practice to use updater functions

import { useState } from "react";
function Counetr() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((preCount) => preCount + 1); 
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
  };
  const decrement = () => {
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <p>Number : {count}</p>
      <button onClick={increment}> Increment </button>

      <button onClick={reset}> Reset </button>

      <button onClick={decrement}> Decrement </button>
    </div>
  );
}

export default Counetr;
