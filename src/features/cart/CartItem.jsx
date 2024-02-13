function CartItem({ item }) {
  return (
    <li className="mb-5 border-b-2 pb-3">
      <div className="flex items-center space-x-2 mb-2">
        <h2 className="text-2xl">1 </h2>
        <div className="flex items-center space-x-3">
          <div className="w-2/12">
            <img
              className="w-full object-cover"
              src={item.image}
              alt="product img"
            />
          </div>
          <p className="text-stone-800 font-roboto">{item.title}</p>
        </div>
        <h2 className="text-stone-900 font-bold">{item.price}</h2>
      </div>
      <div>
        <p className="uppercase text-stone-500 font-roboto font-semibold">
          {item.category}
        </p>
        <p className="text-sm font-serif tracking-wider text-stone-700">
          {item.description}
        </p>
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <p>
              <span>⭐️⭐️⭐️⭐️ </span>
              <span className="font-bold">{item.rating.rate}</span>
            </p>
            <p className="font-roboto">
              Count: <span className="font-semibold">{item.rating.count}</span>
            </p>
          </div>
          <div>Inc&Dec Btn</div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
