import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/fv.jpeg";
import useOnline from "../utils/useOnline";

const Title = () => (
  <img
    className="h-28 p-2"
    alt="logo"
    src={Logo}
  />
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

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
          <li className="px-2"> Cart </li>
          <Link to="/instamart">
            <li className="px-2"> InstaMart </li>
          </Link>
        </ul>
      </div>
      {isOnline ? "✅" : "🔴"}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)} className="px-5">
        Log{isLoggedIn ? "out" : "in"}
      </button>
    </div>
  );
};

export default Header;
