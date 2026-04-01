import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  function handleMove() {
    navigate("/dashboard/profile");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={handleMove}
        className="border-2 border-blue-500 rounded-lg px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-800"
      >
        Move to profile page
      </button>
      <Outlet />
    </div>
  );
}

export default Dashboard;
