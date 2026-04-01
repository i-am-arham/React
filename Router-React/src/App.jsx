import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard/dashboard.dashboard";
import RootLayout from "./rootLayout";
import Error from "./pages/error";
import Profile from "./pages/dashboard/dashboard.profile";
import Overview from "./pages/dashboard/dashboard.overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "about", element: <About /> },

      {
        path: "dashboard",
        element: <Dashboard />,
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
