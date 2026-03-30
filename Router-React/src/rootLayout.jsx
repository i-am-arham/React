import { Outlet } from "react-router-dom";

import Navbar from "./component/navBar";

function RootLayout() {
  // Renders the matching child route of a parent route or
  //   nothing if no child route matches.
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
