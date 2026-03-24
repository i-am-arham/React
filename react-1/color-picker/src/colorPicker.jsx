// import { useState } from "react";
// function MyColor() {
//   const [color, setColor] = useState("#ffff");

//   function handleColor(event){
//     setColor(event.target.value)
//   }

//   return (
//     <>
//       <div>
//         <h1>Color Picker</h1>

//         <label>Select Color : </label>
//         <input type="color" value={color} />

//         <div value={color} onChange={handleColor}>Color selectd : {color}</div>
//         <input type="text" />
//       </div>
//     </>
//   );
// }

// export default MyColor;

import { useState } from "react";

function MyColor() {
  const [color, setColor] = useState("#ffffff"); // corrected hex

  function handleColor(event) {
    setColor(event.target.value);
  }

  return (
    <div>
      <h1>Color Picker</h1>

      <label>Select Color: </label>
      <input type="color" value={color} onChange={handleColor} />

      <div style={{ marginTop: "10px" }}>
        Color selected: <span style={{ color }}>{color}</span>
      </div>
    </div>
  );
}

export default MyColor;