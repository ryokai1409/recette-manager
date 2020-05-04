import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <ul className="nav-bar">
      <li>
        <NavLink to="/" exact>
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink to="/search">Rechercher</NavLink>
      </li>
      <li>
        <NavLink to="/ajouter">Ajouter</NavLink>
      </li>
      <li>
        <NavLink to="/recettes">Mes Recettes</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
