import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex flex-col">
      <div className="bg-header text-white flex justify-between px-10 py-4">
        <h3>Currency</h3>
        <div className="flex space-x-4">
          <NavLink>Signin</NavLink>
          <NavLink>Create account</NavLink>
        </div>
      </div>
      <div className="flex justify-between px-10 py-4">
        <div>Logo</div>
        <div className="flex space-x-8 font-sans text-stone-500 text-[16px] border-b-1 border-b-stone-500">
          <NavLink className="pb-4">Men</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>Kids</NavLink>
          <NavLink>Jewelery</NavLink>
          <NavLink>Electronics</NavLink>
        </div>
        <div>Cart</div>
      </div>
    </div>
  );
}

export default Navigation;
