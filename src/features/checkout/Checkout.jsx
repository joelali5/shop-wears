import BackBtn from "../../ui/BackBtn";

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
      <BackBtn route={-1} />
      <div className="sm:w-3/5 sm:mx-auto mx-2 my-2 sm:my-0">
        <div className="flex flex-col mb-4">
          <p className="w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-mono text-sm sm:text-lg">
            joel aliyu
          </p>

          <p className="w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-mono text-sm sm:text-lg">
            27 Okparavero close, off uwasota. Benin city
          </p>
          <p className="w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-mono text-sm sm:text-lg">
            0764632342445
          </p>
        </div>
        <ul className="list-none flex">
          {fakeCart.map((item) => (
            <li className="mb-5 pb-3 basis-24" key={item.id}>
              <div className="">
                <img className="w-full" src={item.image} alt="product img" />
              </div>
            </li>
          ))}
        </ul>
        <div>Payment method</div>
      </div>
    </>
  );
}

export default Checkout;
