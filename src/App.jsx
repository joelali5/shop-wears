import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import Item from "./features/products/Item";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path:"/item",
        element: <Item />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
