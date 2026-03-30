import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home";
import About from "./component/about";
import DashBoard from "./dashbard";

import RootLayout from "./rootLayout";
import Error from "./component/error";
import Profile from "./component/dashboard/dashboard.profile";
import Overview from "./component/dashboard/dashboard.overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "dashboard",
        element: <DashBoard />,
        children: [
          { index: true, element: <Overview /> },
          { path: "profile", element: <Profile /> },
        ],
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
