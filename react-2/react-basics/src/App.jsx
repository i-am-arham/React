import { useState } from "react";
import { PostComponent } from "./Post";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PostComponent
      name={"M-Arham"}
      subtitle={"12 Followers"}
      time={"2min"}
      />

      <ToggleMessage />
      <ToggleMessage/>
      <ToggleMessage/>
    </>
  );
}

export default App;

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  );
}
