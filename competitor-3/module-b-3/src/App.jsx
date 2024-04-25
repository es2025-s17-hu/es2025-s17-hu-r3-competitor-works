import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/index/IndexPage";
import BookPage from "./pages/book/BookPage";

/**
 * Create the router
 */
const router = createBrowserRouter([
  { path: "/", element: <IndexPage /> },
  { path: "/book", element: <BookPage /> },
]);

/**
 * The entrypoint of the app
 * @returns
 */
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
