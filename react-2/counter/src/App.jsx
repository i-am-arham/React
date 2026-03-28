import { useState, useRef, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const intervalRef = useRef(null);

//   function startTimer() {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setCount((c) => c + 1);
//       }, 1000);
//     }
//   }

//   function stopTimer() {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   }

//   useEffect(() => {
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <>
//       <div>{count}</div>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </>
//   );
// }

function App() {
  const [count, setCount] = useState(0);
  const inetrvalRef = useRef(null);

  function handleStart() {
    if (!inetrvalRef.current) {
      inetrvalRef.current = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
  }

  function handleStop() {
    clearInterval(inetrvalRef.current);
    inetrvalRef.current = null;
  }

  useEffect(() => {}, []);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleStart}> start </button>
      <button onClick={handleStop}> stop </button>
    </>
  );
}

export default App;
