import { Link } from "react-router-dom";

function Home() {
  return (
    <ul className="px-5 py-8 sm:w-3/5 sm:mx-auto sm:px-0 sm:pt-10 grid grid-cols-auto-grid gap-5">
      <li className="">
        <img src="all.jpg" alt="all wears" className="h-[300px] object-cover" />
        <p>Men</p>
        <Link to="/products">Shop Now</Link>
      </li>
      <li className="">
        <img src="men.jpg" alt="mens wear" className="h-[300px]" />
        <p>Men</p>
        <Link to="/men">Shop Now</Link>
      </li>
      <li>
        <img
          src="women.jpg"
          alt="womens wear"
          className="h-[300px] object-cover"
        />
        <p>Women</p>
        <Link to="/women">Shop Now</Link>
      </li>
      <li>
        <img
          src="jewellery.jpg"
          alt="jewellery wear"
          className="h-[300px] object-cover"
        />
        <p>Jewellery</p>
        <Link to="/jewelery">Shop Now</Link>
      </li>
      <li>
        <img
          src="kids.jpg"
          alt="kids wear"
          className="h-[300px] object-cover"
        />
        <p>Kids</p>
        <Link to="/kids">Shop Now</Link>
      </li>
      <li>
        <img
          src="electronics.jpg"
          alt="electronics wear"
          className="h-[300px] object-cover"
        />
        <p>Electronics</p>
        <Link to="/electronics">Shop Now</Link>
      </li>
    </ul>
  );
}
export default Home;
