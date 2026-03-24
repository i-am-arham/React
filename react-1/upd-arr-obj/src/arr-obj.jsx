import { useState } from "react";

function MyComponent() {
  const [cars, setCar] = useState([
    { year: 2025, make: "Toyota", model: "Corolla" },
  ]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState("");
  const [carMake, setCarMake] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      model: carModel,
      make: carMake,
    };
    setCar((car) => [...car, newCar]);
    setCarModel("");
    setCarMake("");
  }
  function handleRemoveCar(index) {
    setCar((c) => c.filter((_, i) => i !== index));
  }
  function handleYearCar(event) {
    setCarYear(event.target.value);
  }
  function handleModelCar(event) {
    setCarModel(event.target.value);
  }
  function handleMakeCar(event) {
    setCarMake(event.target.value);
  }

  return (
    <>
      {" "}
      <div>
        <h2>List of objects.</h2>
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
        <input type="number" value={carYear} onChange={handleYearCar} /> <br />
        <input
          type="text"
          value={carModel}
          onChange={handleModelCar}
          placeholder="Enter car model"
        />{" "}
        <br />
        <input
          type="text"
          value={carMake}
          onChange={handleMakeCar}
          placeholder="Enter car maker"
        />{" "}
        <br />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default MyComponent;
