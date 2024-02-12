import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import BackBtn from "../../ui/BackBtn";

function Item() {
  const item = useLoaderData();
  const { image, category, title, price, description } = item;

  return (
    <>
      <BackBtn route={-1} />
      <div className="border-2 flex flex-col border-slate-200 mb-3 px-2 py-2 mt-24 mx-5 sm:w-4/5 sm:flex-row sm:space-x-10 sm:items-center sm:mx-auto sm:px-5">
        <div className="w-full h-1/2">
          <img src={image} alt="item img w-full" />
        </div>
        <div className="h-1/2 flex flex-col justify-end gap-3">
          <p className="text-md uppercase text-stone-400">{category}</p>
          <p className="font-roboto text-xl font-bold">{title}</p>
          <p className="font-roboto text-md sm:text-lg sm:w-5/6">
            {description}
          </p>
          <div className="flex justify-between items-center mt-4 sm:w-5/6">
            <p className="font-bold text-lg sm:text-2xl">£{price}</p>
            <button className="border-1 px-3 py-3 font-bold outline outline-1 outline-primary hover:bg-primary transition hover:ease-in-out duration-300 hover:text-white uppercase text-xs rounded-sm">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const item = await getProduct(params.id);

  return item;
}
export default Item;
