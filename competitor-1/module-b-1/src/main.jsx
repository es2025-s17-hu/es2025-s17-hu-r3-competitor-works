import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: Home,
  },
  {
    path: "/demo",
    Component: Demo,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
