
import Navigation from "./Navigation";

function Header() {
  return <Navigation />;
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-primary py-5 border-b-[1px]">
      <div className="sm:w-3/5 sm:mx-auto flex justify-between">
        <Link
          to="/"
          className="text-lg uppercase text-primary font-bold font-greatVibe tracking-widest"
        >
          shopstuff
        </Link>
        <nav>navigation</nav>
      </div>
    </header>
  );
}

export default Header;
