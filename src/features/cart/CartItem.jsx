import DeleteItem from "./DeleteItem";

function CartItem({ item }) {
  const { id, title, price, category, description, image } = item;
  console.log(item);
  return (
    <li className="mb-5 border-b-2 pb-3">
      <div className="flex items-center space-x-2 mb-2">
        <h2 className="text-2xl">1 </h2>
        <div className="flex items-center space-x-3">
          <div className="w-2/12">
            <img
              className="w-full object-cover"
              src={image}
              alt="product img"
            />
          </div>
          <p className="text-stone-800 font-roboto">{title}</p>
        </div>
        <h2 className="text-stone-900 font-bold">{price}</h2>
      </div>
      <div>
        <p className="uppercase text-stone-500 font-roboto font-semibold">
          {category}
        </p>
        <p className="text-sm font-serif tracking-wider text-stone-700 mb-4">
          {description}
        </p>
        <div className="flex justify-between">
          <DeleteItem id={id} />
          <div>Inc&Dec Btn</div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
