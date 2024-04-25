import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import { AuthProvider } from "./components/AuthProvider";
import AuthEnsureWrapper from "./components/AuthEnsureWrapper";
import Tables from "./pages/Tables";
import Table from "./pages/Table";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: Auth,
  },
  {
    path: "/tables",
    Component: AuthEnsureWrapper,
    children: [
      {
        path: "/tables",
        Component: Tables,
      },
      {
        path: "/tables/:id",
        Component: Table,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
