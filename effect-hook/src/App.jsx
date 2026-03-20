import MyComponent from "./myComponent.jsx";

// useEffect() // side code 
// React Hook that tells React to DO THIS CODE WHEN:
// (pick one)
// This component re-renders
// This component mounts
// The state of a value changes

// useEffect(function, [dependencies])

//useEffect(() => {})              // Runs after every re-renders
//useEffect(() => {},[])           // Runs only on mount
//useEffect(() => {},[value])      // Runs on mount + when the value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
