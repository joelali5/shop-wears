import { Link } from "react-router-dom";

function Product({ product }) {
  const { id, image, price, category } = product;

  return (
    <Link to={`/item/${id}`}>
      <li className="flex flex-col bg-white shadow-md mb-3 px-2 py-2 sm:h-fit">
        <div className="w-full sm:h-[230px] object-cover mb-4">
          <img src={image} className="w-full h-full" alt="item img" />
        </div>
        <div className="h-1/2 flex flex-col justify-end gap-3">
          <p className="text-md uppercase text-stone-400">{category}</p>
          {/* <p className="font-roboto text-sm font-bold">{title}</p> */}
          <p className="">£{price}</p>
        </div>
      </li>
    </Link>
  );
}

export default Product;
