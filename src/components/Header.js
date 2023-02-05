import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/fv.jpeg";
import useOnline from "../utils/useOnline";

const Title = () => (
  <img
    className="logo"
    alt="logo"
    src={Logo}
  />
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li> About Us </li>
          </Link>
          <Link to="/contact">
            <li> Contact </li>
          </Link>
          <li> Cart </li>
          <Link to="/instamart">
            <li> InstaMart </li>
          </Link>
        </ul>
      </div>
      {isOnline ? "✅" : "🔴"}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Log{isLoggedIn ? "out" : "in"}
      </button>
    </div>
  );
};

export default Header;
