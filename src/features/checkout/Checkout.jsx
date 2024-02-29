import BackBtn from "../../ui/BackBtn";
import useUser from "../../hooks/useUser";
import CheckoutSpinner from "../../ui/SpinnerMini";
import { useSelector } from "react-redux";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function Checkout() {
  const { metaData } = useUser();
  const { address, fullname, phone } = metaData;

  const cart = useSelector((state) => state.cart.cart);
  return (
    <>
      <BackBtn route={-1} />
      <div className="sm:w-3/5 sm:mx-auto sm:flex sm:justify-between sm:items-center">
        <div className="">
          <div className="flex flex-col mb-4">
            {address === "" && fullname === "" && phone === "" ? (
              <CheckoutSpinner />
            ) : (
              <>
                <p className="w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-serif text-sm sm:text-lg">
                  {fullname}
                </p>
                <p className="w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-serif text-sm sm:text-lg">
                  {address}
                </p>
                <p className="w-full sm:w-3/5 rounded-md text-stone-500 capitalize font-serif text-sm sm:text-lg">
                  {phone}
                </p>
              </>
            )}
          </div>
          <ul className="list-none px-4 py-3 sm:w-3/5 sm:px-0">
            {cart.map((item) => (
              <li className="mb-5 border-b-2 pb-3">
                <div className="flex items-center space-x-2 mb-5">
                  <span className="text-md">{item.quantity}</span>
                  <span>x</span>
                  <div className="flex items-center space-x-2 sm:space-x-12">
                    <div className="w-[50px]">
                      <img
                        className="w-full object-cover"
                        src={item.image}
                        alt="product img"
                      />
                    </div>
                  </div>
                  <p className="text-stone-800 font-roboto">{item.title}</p>
                  <h4 className="text-stone-900 font-bold text-sm sm:ml-5">
                    £{item.totalPrice.toFixed(2)}
                  </h4>
                </div>
                <div>
                  <div className="flex justify-between">
                    <DeleteItem id={item.id} />
                    <UpdateItemQuantity id={item.id} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>Payment method</div>
      </div>
    </>
  );
}

export default Checkout;
