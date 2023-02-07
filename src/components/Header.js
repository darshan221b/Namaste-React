import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/img/fv.jpeg";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
  <img data-testid="logo" className="h-28 p-2" alt="logo" src={Logo} />
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-300 shadow-lg sm:bg-blue-300">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2"> About Us </li>
          </Link>
          <Link to="/contact">
            <li className="px-2"> Contact </li>
          </Link>

          <Link to="/instamart">
            <li className="px-2"> InstaMart </li>
          </Link>
          <Link to="/cart">
            <li className="px-2" data-testid="cart">Cart - {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <span className="p-10 font-bold text-red-400">{user.name}</span>
      <h1 data-testid="online-status">{isOnline ? "✅" : "🔴"}</h1>
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="px-5 bg-gray-500"
      >
        Log{isLoggedIn ? "out" : "in"}
      </button>
    </div>
  );
};

export default Header;
