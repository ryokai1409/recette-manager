import React from "react";
import Bouton from "../../../UIElement/Bouton";
import "./HeaderNavBar.css";
const HeaderNavBar = () => {
  return (
    <div className="header-nav-bar">
      <Bouton size="small" inverse>
        MON COMPTE
      </Bouton>
      <p>Les recettes de Papa</p>
      <Bouton size="small">MON PANIER</Bouton>
    </div>
  );
};
export default HeaderNavBar;
