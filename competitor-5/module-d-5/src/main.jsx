import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import {AuthProvider} from "./authContext.jsx";
import DashboardPage from "./pages/dashboard.jsx";
import MenuCategories from "./pages/menu-categories.jsx";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/dashboard',
        element: <DashboardPage></DashboardPage>
    },
    {
        path: '/menu-categories',
        element: <MenuCategories></MenuCategories>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
