import { useState } from "react";
function MyComponent2() {
  const [cars, setCar] = useState([]);
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: year,
      make: make,
      model: model,
    };
    setCar((prev) => [...prev, newCar]);
    setYear("");
    setMake("");
    setModel("");
  }
  function handleRemoveCar(index) {
    setCar((car) => car.filter((_,i) => i !== index));
  }
  function handleYear(event) {
    setYear(event.target.value);
  }
  function handleMake(event) {
    setMake(event.target.value);
  }
  function handleModel(event) {
    setModel(event.target.value);
  }

  return (
    <div>
      <h2>List Items in the fields</h2>
      <ul>
        {cars.map((car, index) => (
          <li
            key={index}
            onClick={() => {
              handleRemoveCar(index);
            }}
          >
            {car.year} {car.make} {car.model}{" "}
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={year}
        onChange={handleYear}
        placeholder="Enter car year"
      />
      <br />
      <input
        type="text"
        value={make}
        onChange={handleMake}
        placeholder="Enter car make"
      />
      <br />
      <input
        type="text"
        value={model}
        onChange={handleModel}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Items</button>
    </div>
  );
}

export default MyComponent2;
