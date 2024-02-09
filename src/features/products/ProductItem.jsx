import { Link } from "react-router-dom";

function Product({ product }) {
  const { id, image, price, category, title } = product;

  return (
    <Link to={`/item/${id}`}>
      <li className="border-2 flex flex-col border-slate-200 mb-3 px-2 py-2">
        <div className="w-full h-1/2">
          <img src={image} alt="item img w-full" />
        </div>
        <div className="h-1/2 flex flex-col justify-end gap-3">
          <p className="text-md uppercase text-stone-400">{category}</p>
          <p className="font-roboto text-sm font-bold">{title}</p>
          <p className="">£{price}</p>
        </div>
      </li>
    </Link>
  );
}

export default Product;
