import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import "./MainNavigation.css";
import HeaderNavBar from "../../components/HeaderNavBar/HeaderNavBar";

const MainNavigation = () => {
  return (
    <div className="main-navigation">
      <HeaderNavBar />
      <NavBar />
    </div>
  );
};

export default MainNavigation;
