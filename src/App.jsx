import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
// import { loader as productsLoader } from "./features/products/Products";
import Home, { loader as homeLoader } from "./ui/Home";
import Item, { loader as itemLoader } from "./features/products/Item";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/item/:id",
        element: <Item />,
        loader: itemLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
