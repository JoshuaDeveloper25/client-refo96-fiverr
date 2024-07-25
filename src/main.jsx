// --> Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// --> Default imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from "react-dom/client";
import React from "react";

// --> Pages
import Root from "./pages/Root";
import FormEmail from "./pages/FormEmail/FormEmail";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },

      {
        element: <FormEmail />,
        path: "/form",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer position="top-center" stacked />
    <RouterProvider router={router} />
  </>
);
