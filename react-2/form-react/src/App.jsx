import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function Arham(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(Arham)}>
        <div>
          <label>First Name</label>
          <input {...register("firstname")} />
        </div>
        <br />
        <div>
          <label>Last Name</label>
          <input {...register("lastname")} />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input {...register("email")} />
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
