// import { useForm } from "react-hook-form";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   async function Arham(data) {
//     await new Promise((resolve) => {
//       setTimeout(resolve, 5000);
//     });
//     console.log(data);
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit(Arham)}>
//         <div>
//           <label>First Name: </label>
//           <input
//             {...register("firstname", {
//               required: true,
//               minLength: {
//                 value: 3,
//                 message: "First Name must have at least 3 characters",
//               },
//               maxLength: 10,
//             })}
//           />
//           {errors.firstname && <p>{errors.firstname.message}</p>}
//         </div>
//         <br />
//         <div>
//           <label>Last Name: </label>
//           <input {...register("lastname")} />
//         </div>
//         <br />
//         <div>
//           <label>Email: </label>
//           <input {...register("email")} />
//         </div>
//         <br />
//         <input
//           type="submit"
//           disabled={isSubmitting}
//           value={isSubmitting ? "Submitting" : "Submit"}
//         />
//       </form>
//     </>
//   );
// }

// export default App;


