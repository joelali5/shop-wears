import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Products from "./features/products/Products";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Products /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
