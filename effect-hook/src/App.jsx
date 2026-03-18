import MyComponent from "./myComponent";

// useEffect()
// React Hook that tells React to DO THIS CODE WHEN:
// (pick one)
// This component re-renders
// This component mounts
// The state of a value changes

// useEffect(function, [dependencies])

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
