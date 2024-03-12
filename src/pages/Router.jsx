// Third party
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import App from "../App.jsx";
import ErrorPage from "./Error/ErrorPage.jsx";
import Home from "./Home/Home.jsx";

function Router() {
  // Paths are case-insensitive, isSensitive prop of Route component has value false by default
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
