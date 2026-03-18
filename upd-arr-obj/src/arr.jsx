//You can put objects and arrays into state. In React, state is considered read-only, so you should replace it rather
// than mutate your existing objects. For example, if you have a form object in state, don’t mutate it.
import { useState } from "react";

function ArrComponent() {
  const [foods, setFood] = useState(["Orange", "Mango", "Banana"]);
  const [inputValue, setInput] = useState("");

  function handleAddFood() {
    if (inputValue.trim() !== "") {
      setFood([...foods, inputValue]);
      setInput("");
    }
  }

  function handleRemoveFood() {
    setFood((prevFoods) => prevFoods.slice(0, -1));
  }

  return (
    <div>
      <h1>List of food</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter Your Favourite Food"
        onChange={(e) => setInput(e.target.value)}
        value={inputValue}
      />
      <br />
      <button onClick={handleAddFood}>Add Food</button>
      <br />

      <button onClick={handleRemoveFood}>Remove Food</button>
    </div>
  );
}

export default ArrComponent;
