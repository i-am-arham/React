import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleQuantity(event) {
    setQuantity(event.target.value);
  }

  function handleComment(event) {
    setComment(event.target.value);
  }
  function handlePayment(event) {
    setPayment(event.target.value);
  }
  return (
    <>
      <input value={name} onChange={handleName} />
      <p>Name : {name}</p>

      <input value={quantity} onChange={handleQuantity} type="number" />
      <p>Quantity : {quantity}</p>

      <textarea value={comment} onChange={handleComment} />
      <p>Comment : {comment}</p>

      <select value={payment} onChange={handlePayment}>
        <option value="Arham">Select Options</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <p>Payment Method : {payment}</p>
    </>
  );
}
export default MyComponent;

// import { useState } from "react";

// function Form() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;

//     setForm(prevForm => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(form);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={form.name}
//         onChange={handleChange}
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={handleChange}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;