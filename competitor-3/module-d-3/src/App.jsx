import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import AuthContextProvider from "./context/AuthContext";
import IndexPage from "./pages/index/IndexPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import MenuCategoriesPage from "./pages/menuCategories/MenuCategoriesPage";
import MenuItemsPage from "./pages/menuItems/MenuItemsPage";

/**
 * Set the default axios values
 */
axios.defaults.baseURL = "https://module-c-3-solution.dineease.com/api/v1";

/**
 * Create the browser router
 */
const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: (
      <DashboardLayout>
        <IndexPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/menuCategories",
    element: (
      <DashboardLayout>
        <MenuCategoriesPage />
      </DashboardLayout>
    ),
  },
  {
    path: "/menuItems",
    element: (
      <DashboardLayout>
        <MenuItemsPage />
      </DashboardLayout>
    ),
  },
]);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
