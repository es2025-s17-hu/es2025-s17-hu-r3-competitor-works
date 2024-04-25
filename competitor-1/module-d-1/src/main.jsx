import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import { AuthProvider } from "./components/AuthProvider";
import DashboardWrapper from "./components/DashboardWrapper";
import Index from "./pages/Index";
import MenuItems from "./pages/MenuItems";
import MenuCategories from "./pages/MenuCategories";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: Auth,
  },
  {
    path: "/dashboard",
    Component: DashboardWrapper,
    children: [
      {
        path: "/dashboard/",
        Component: Index,
      },
      {
        path: "/dashboard/categories",
        Component: MenuCategories,
      },
      {
        path: "/dashboard/items",
        Component: MenuItems,
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
