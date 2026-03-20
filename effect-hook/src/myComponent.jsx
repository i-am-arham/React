import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((c) => c + 1);
  }

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={addCount}>Add</button>
    </>
  );
}

export default MyComponent;
