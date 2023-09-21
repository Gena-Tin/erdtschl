import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/team">Team</NavLink>
      </nav>
    </header>
  );
}

export default Header;
