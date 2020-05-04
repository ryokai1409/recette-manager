import React from "react";

import RecetteItem from "./RecetteItem";
import "./RecetteList.css";

const RecetteList = (props) => {
  return (
    <ul className="recette-list">
      {props.recettes.map((recette) => (
        <RecetteItem
          title={recette.title}
          images={recette.images}
          description={recette.description}
          preparation={recette.preparation}
          cuisson={recette.cuisson}
          budget={recette.budget}
          note={recette.note}
          author={recette.author}
        />
      ))}
    </ul>
  );
};
export default RecetteList;
