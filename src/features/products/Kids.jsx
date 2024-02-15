import { getCategory } from "../../services/apiProducts";
import { useLoaderData } from "react-router-dom";
import Product from "./ProductItem";

function Kids() {
  const kidsClothing = useLoaderData();

  return (
    <ul className="my-5 mx-5 grid gap-5 grid-cols-auto-grid sm:w-3/5 sm:mx-auto">
      {kidsClothing.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await getCategory("kids");
  return data;
}
export default Kids;
