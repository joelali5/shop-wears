import { Link } from "react-router-dom";

function Home() {
  return (
    <ul className="px-5 py-8 sm:w-4/5 sm:mx-auto sm:px-0 sm:pt-10 grid grid-cols-auto-grid gap-5">
      <li className="mb-5 sm:mb-4">
        <img
          src="all.jpg"
          alt="all wears"
          className="sm:h-[300px] sm:w-[350px] rounded-lg object-cover"
        />
        <p>All products</p>
        <Link to="/products" className="text-stone-400">
          Shop Now
        </Link>
      </li>
      <li className="mb-5 sm:mb-4">
        <img
          src="men.jpg"
          alt="mens wear"
          className="sm:h-[300px] sm:w-[350px] rounded-lg"
        />
        <p>Men</p>
        <Link to="/men" className="text-stone-400">
          Shop Now
        </Link>
      </li>
      <li className="mb-5 sm:mb-4">
        <img
          src="women.jpg"
          alt="womens wear"
          className="sm:h-[300px] sm:w-[350px] rounded-lg object-cover"
        />
        <p>Women</p>
        <Link to="/women" className="text-stone-400">
          Shop Now
        </Link>
      </li>
      <li className="mb-5 sm:mb-4">
        <img
          src="jewellery.jpg"
          alt="jewellery wear"
          className="sm:h-[300px] sm:w-[350px] rounded-lg object-cover"
        />
        <p>Jewellery</p>
        <Link to="/jewelery" className="text-stone-400">
          Shop Now
        </Link>
      </li>
      <li className="mb-5 sm:mb-4">
        <img
          src="kids.jpg"
          alt="kids wear"
          className="sm:h-[300px] sm:w-[350px] rounded-lg object-cover"
        />
        <p>Kids</p>
        <Link to="/kids" className="text-stone-400">
          Shop Now
        </Link>
      </li>
      <li className="mb-5 sm:mb-4">
        <img
          src="electronics.jpg"
          alt="electronics"
          className="sm:h-[300px] sm:w-[350px] rounded-lg object-cover"
        />
        <p>Electronics</p>
        <Link to="/electronics" className="text-stone-400">
          Shop Now
        </Link>
      </li>
    </ul>
  );
}
export default Home;
