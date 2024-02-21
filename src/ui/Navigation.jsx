import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import MobileViewNav from "./MobileViewNav";
import LargeScreens from "./LargeScreens";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleMenuToggle() {
    setIsOpen((prevOpen) => !prevOpen);
  }
  return (
    <div className="flex flex-col">
      <div className="bg-primary text-white flex justify-between items-center px-5 sm:px-10 py-4 sm:py-0">
        <Link to="/">
          <img className="w-[100px]" src="logo.png" alt="website logo" />
        </Link>
        <LargeScreens />
        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <Link to="/register">
              <FaRegUser className="text-lg cursor-pointer text-stone-300" />
            </Link>
          ) : (
            <Link to="/login">
              <IoMdLogIn className="text-2xl cursor-pointer text-stone-300" />
            </Link>
          )}

          <Link to="/cart" className="flex">
            <BsCart4 className="text-2xl cursor-pointer text-stone-300" />
            <sub className="text-red-500 font-700 font-roboto">0</sub>
          </Link>
          <h3>CAD</h3>
        </div>
      </div>
      <div className="flex justify-between bg-primary sm:bg-transparent pt-5">
        <div className="flex flex-col gap-4 px-5 sm:flex-row sm:justify-between sm:px-10 sm:py-4">
          {isOpen && <MobileViewNav />}
        </div>
        <div className="pr-5 sm:hidden" onClick={handleMenuToggle}>
          {isOpen ? (
            <IoClose className="text-3xl text-stone-200" />
          ) : (
            <IoMenu className="text-3xl text-stone-200" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
