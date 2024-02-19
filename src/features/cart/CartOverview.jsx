import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-primary text-stone-200 flex justify-between items-center px-2 py-5">
      <div className="flex space-x-10 items-center">
        <div className="flex space-x-1 text-[17px] font-roboto">
          <p>3</p>
          <p>Items</p>
        </div>
        <p className="text-[17px]">£43.00</p>
      </div>
      <Link to="/cart" className="text-[17px] font-roboto">
        Open Cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
