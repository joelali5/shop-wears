import { useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/apiProducts";
import Product from "./ProductItem";
import BackBtn from "../../ui/BackBtn";

function Products() {
  const { products } = useLoaderData();
  return (
    <>
      <BackBtn route={-1} />
      <ul className="my-5 mx-5 grid gap-5 grid-cols-auto-grid sm:w-3/5 sm:mx-auto">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default Products;
