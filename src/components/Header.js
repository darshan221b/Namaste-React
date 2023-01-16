import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <img
    className="logo"
    alt="logo"
    src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
  />
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        </ul>
      </div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Log{isLoggedIn ? "out" : "in"}
      </button>
    </div>
  );
};

export default Header;
