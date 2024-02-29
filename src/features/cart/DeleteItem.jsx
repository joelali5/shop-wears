import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();

  return (
    <button
      className="w-full sm:w-fit border-1 px-5 py-3 font-bold hover:outline hover:outline-1 hover:outline-primary hover:bg-transparent bg-primary transition hover:ease-in-out duration-300 text-stone-200 hover:text-primary uppercase text-xs rounded-sm"
      onClick={() => dispatch(deleteItem(id))}
    >
      Delete
    </button>
  );
}

export default DeleteItem;
