import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Products, {
  loader as productsLoader,
} from "./features/products/Products";
import Home from "./ui/Home";
import Item, { loader as itemLoader } from "./features/products/Item";
import Mens, { loader as mensLoader } from "./features/products/Mens";
import Women from "./features/products/Women";
import Electronics, {
  loader as electronicsLoader,
} from "./features/products/Electronics";
import Jewelery, {
  loader as jeweleryLoader,
} from "./features/products/Jewelery";
import Cart from "./features/cart/Cart";
import SignUp from "./features/authentication/SignUp";
import Login from "./features/authentication/Login";
import Checkout from "./features/checkout/Checkout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productsLoader,
      },
      {
        path: "/item/:id",
        element: <Item />,
        loader: itemLoader,
      },
      {
        path: "/men",
        element: <Mens />,
        loader: mensLoader,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/jewelery",
        element: <Jewelery />,
        loader: jeweleryLoader,
      },
      {
        path: "/electronics",
        element: <Electronics />,
        loader: electronicsLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
