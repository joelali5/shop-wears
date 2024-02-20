import BackBtn from "../../ui/BackBtn";
import CartItem from "../cart/CartItem";

const fakeCart = [
  {
    id: 1,
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    id: 2,
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
  {
    id: 3,
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  },
];

function Checkout() {
  return (
    <>
      <BackBtn />
      <div className="sm:w-3/5 sm:mx-auto mx-2 my-2 sm:my-0">
        <form className="flex flex-col mb-4">
          <input
            type="text"
            defaultValue="joel aliyu"
            className="p-1 border-[1.5px] border-stone-200 w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-mono mb-3 text-sm sm:text-lg"
          />
          <input
            type="number"
            defaultValue="0764632342445"
            className="p-1 border-[1.5px] border-stone-200 w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-mono mb-3 text-sm sm:text-lg"
          />
          <input
            type="text"
            defaultValue="27 Okparavero close, off uwasota. Benin city"
            className="border-[1.5px] p-1 border-stone-200 w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-mono mb-3 text-sm sm:text-lg"
          />
        </form>
        <ul className="list-none px-2 py-3 sm:w-full sm:mx-auto sm:px-0">
          {fakeCart.map((item) => (
            <CartItem item={item} key={item.key} />
          ))}
        </ul>
        <div>Payment method</div>
      </div>
    </>
  );
}

export default Checkout;
