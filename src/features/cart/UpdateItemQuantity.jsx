import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  return (
    <div className="flex space-x-2 items-center">
      <button
        className="bg-primary text-stone-200 h-7 w-7 flex justify-center items-center rounded-full font-bold"
        onClick={() => dispatch(decreaseItemQuantity(id))}
      >
        -
      </button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <button
        className="bg-primary text-stone-200 h-7 w-7 flex justify-center items-center rounded-full font-bold"
        onClick={() => dispatch(increaseItemQuantity(id))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
