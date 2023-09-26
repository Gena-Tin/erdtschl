import React from "react";
// import { NavLink } from "react-router-dom";
import Navibar from "../Navibar/Navibar";

function Header() {
  return (
    <header>
      {/* <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/team">Team</NavLink>
      </nav> */}
      <Navibar />
    </header>
  );
}

export default Header;
