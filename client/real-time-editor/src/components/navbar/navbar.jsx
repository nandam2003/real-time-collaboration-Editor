import "./navbar.css";
import Logo from "../../assets/logo.svg";
import Hamburger from "../../assets/icons8-hamburger-menu.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo}></img>
          </NavLink>
        </div>
        <div className="menu-icon" onClick={toggleNavItems}>
          <img src={Hamburger}></img>
        </div>
        <div className={`nav-elements ${showNav && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login/SignUp</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
