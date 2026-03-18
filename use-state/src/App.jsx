// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]



// import MyComponent from "./my-component";
import Couneter from "./counter";

function App() {
  return (
    <>
      {/* <MyComponent /> */}
      <Couneter/>
    </>
  );
}

export default App;
