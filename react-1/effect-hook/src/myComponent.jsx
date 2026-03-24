import { useState, useEffect } from "react";

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   function addCount() {
//     setCount((c) => c + 1);
//   }

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <>
//       <p>Count : {count}</p>
//       <button onClick={addCount}>Add</button>
//     </>
//   );
// }

// export default MyComponent;

function Demo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Arham");
  useEffect(() => {
    console.log("Runs every time");
  });

  useEffect(() => {
    console.log("Count Effect");
  }, [count]);

  useEffect(() => {
    console.log("Name Effect");
  }, [name]);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <p>{name}</p>
      <button onClick={() => setName("Ali")}>Chnage</button>
    </>
  );
}

export default Demo;
