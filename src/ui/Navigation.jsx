import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
// import { HiOutlineShoppingBag } from "react-icons/hi2";

function Navigation() {
  return (
    <div className="flex flex-col">
      <div className="bg-header text-white flex justify-between px-5 sm:px-10 py-4">
        <h3>CAD</h3>
        <div>
          <NavLink>Signin</NavLink>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 px-5 sm:flex-row sm:justify-between sm:px-10 sm:py-4">
          <Link to="/">Logo</Link>
          <div className="flex flex-col gap-4 sm:flex-row sm:space-x-8 sm:font-sans text-stone-600 text-[16px] border-b-1 border-b-stone-500">
            <NavLink
              to="/men"
              className="hover:text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
            >
              Men
            </NavLink>
            <NavLink
              to="/women"
              className="hover:text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
            >
              Women
            </NavLink>
            <NavLink
              to="/kids"
              className="hover:text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
            >
              Kids
            </NavLink>
            <NavLink
              to="/jewelery"
              className="hover:text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
            >
              Jewelery
            </NavLink>
            <NavLink
              to="/electronics"
              className="hover:text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
            >
              Electronics
            </NavLink>
          </div>
          <div>
            <BsCart4 className="text-4xl cursor-pointer text-primary" />
          </div>
        </div>
        <div className="pr-5 sm:hidden">
          <IoMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
