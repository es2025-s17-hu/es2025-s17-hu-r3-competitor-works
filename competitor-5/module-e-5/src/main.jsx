import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import AppLayout from "./components/app.jsx";
import TableSelection from "./pages/table-selection.jsx";
import OrderScreen from "./pages/table.jsx";

//Router for pages
const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout></AppLayout>,
        children: [
            {
                path: '/',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/table-selection',
                element: <TableSelection></TableSelection>
            },
            {
                path: '/table/:id',
                element: <OrderScreen></OrderScreen>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
