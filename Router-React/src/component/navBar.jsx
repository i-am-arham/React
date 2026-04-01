import { Link, NavLink } from "react-router-dom";
import "./navBar.css";
function Navbar() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-700" : "text-gray-700"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-700" : "text-gray-700"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-orange-700" : "text-gray-700"
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;

