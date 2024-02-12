import { getCategory } from "../../services/apiProducts";
import { useLoaderData } from "react-router-dom";
import Product from "./ProductItem";

function Electronics() {
  const electronics = useLoaderData();

  return (
    <ul className="my-5 mx-5 grid gap-5 grid-cols-auto-grid sm:w-3/5 sm:mx-auto">
      {electronics.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await getCategory("electronics");
  return data;
}
export default Electronics;
