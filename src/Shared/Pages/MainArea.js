import React from "react";
import RecetteList from "../../Recettes/components/RecetteList";

import "./MainArea.css";

const DUMMY_RECETTES = [
  {
    id: "r1",
    title: "Burger de Papa",
    description:
      "Ceci est la meilleur recette de Burger avec la sauce de papa.",
    images: "images/burgerPapa.jpg",
    preparation: 15,
    cuisson: 25,
    budget: 2,
    note: 5,
    author: "Anthonio",
  },
  {
    id: "r2",
    title: "Lasagne de Maman",
    description:
      "Ceci est la meilleur recette de Lasagne avec la sauce de maman.",
    images: "images/lasagne.jpg",
    preparation: 30,
    cuisson: 45,
    budget: 3,
    note: 5,
    author: "Henriette",
  },
];

const MainArea = () => {
  return (
    <div className="main-area">
      <RecetteList recettes={DUMMY_RECETTES} />
    </div>
  );
};
export default MainArea;
