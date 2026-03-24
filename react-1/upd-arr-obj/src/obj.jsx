import { useState } from "react";
function ObjComponent() {
  const [car, setCar] = useState({
    make: "Porsche",
    model: "911 GT3",
    year: 2025,
  });

  function handleYearChnage(event) {
    setCar((car) => ({ ...car, year: event.target.value }));
  }
  function handleMakeChnage(event) {
    setCar((car) => ({ ...car, make: event.target.value }));
  }
  function handleModelChnage(event) {
    setCar();
  }
  return (
    <>
      <div>
        <p>
          My favourite car is {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChnage} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChnage} />
        <br/>
        <input type="text" value={car.model} onChange={handleModelChnage} />
        <br />
      </div>
    </>
  );
}

export default ObjComponent;
