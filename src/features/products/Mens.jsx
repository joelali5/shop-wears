import { getCategory } from "../../services/apiProducts";
import { useLoaderData } from "react-router-dom";
import Product from "./ProductItem";
import BackBtn from "../../ui/BackBtn";

function Mens() {
  const mensClothing = useLoaderData();

  return (
    <>
      <BackBtn route={-1} />
      <ul className="my-5 mx-5 grid gap-5 grid-cols-auto-grid sm:w-3/5 sm:mx-auto">
        {mensClothing.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const data = await getCategory("men's clothing");
  return data;
}
export default Mens;
