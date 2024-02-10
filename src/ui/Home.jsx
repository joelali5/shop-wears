import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiProducts";

function Home() {
  const { products } = useLoaderData();
  const categories = products.map((product) => product.category);
  const uniqueCategories = Array.from(new Set(categories));

  return (
    <ul className="px-5 py-8 sm:w-3/5 sm:mx-auto sm:px-0 sm:pt-10 grid grid-cols-auto-grid gap-5">
      <li className="">
        <img src="men.jpg" alt="mens wear" className="h-[350px]" />
        <p>Men</p>
        <Link>Shop Now</Link>
      </li>
      <li>
        <img src="women.jpg" alt="womens wear" className="h-[350px]" />
        <p>Women</p>
        <Link>Shop Now</Link>
      </li>
      <li>
        <img src="jewellery.jpg" alt="jewellery wear" className="h-[350px]" />
        <p>Jewellery</p>
        <Link>Shop Now</Link>
      </li>
      <li>
        <img src="kids.jpg" alt="kids wear" className="h-[350px]" />
        <p>Kids</p>
        <Link>Shop Now</Link>
      </li>
      <li>
        <img src="electronics.jpg" alt="electronics wear" className="h-[350px]" />
        <p>Electronics</p>
        <Link>Shop Now</Link>
      </li>
    </ul>
  );
}

export async function loader() {
  const products = await getProducts();
  return { products };
}
export default Home;
