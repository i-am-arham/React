import { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Anonymous");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const handleFunction = () => {
    setName("Arham");
  };

  const handleFunction1 = () => {
    setAge(age + 1);
  };
  const handleFunction2 = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={handleFunction}> set name </button>

      <p>Age: {age}</p>
      <button onClick={handleFunction1}> Increment Age </button>

      <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={handleFunction2}> Toggle Status </button>
    </div>
  );
}

export default MyComponent;
