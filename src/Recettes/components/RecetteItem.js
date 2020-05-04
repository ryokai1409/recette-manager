import React from "react";

import Bouton from "../../Shared/UIElement/Bouton";
import Card from "../../Shared/UIElement/Card";
import "./RecetteItem.css";
const RecetteItem = (props) => {
  return (
    <React.Fragment>
      <li className="recette-item">
        <Card className="recette-item__content">
          <div className="recette-item__header">
            <h1>{props.title}</h1>
          </div>
          <div className="recette-item__corps">
            <div className="recette-item__image">
              <img src={props.images} alt={props.title} />
            </div>
            <div className="recette-item__info">
              <div className="recette-item__description">
                <span>{props.description}</span>
              </div>
              <div className="recette-item__tags">
                <div>Preparation : {props.preparation} min</div>
                <div>Cuisson : {props.cuisson} min</div>
                <div>Budget : {props.budget}</div>
                <div>Note : {props.note}</div>
              </div>
            </div>
          </div>
          <div className="recette-item__footer">
            <h3>Posté par {props.author}</h3>
            <div className="recette-item__actions">
              <Bouton size="big">VOIR</Bouton>
              <Bouton inverse size="big">
                IMPRIMER
              </Bouton>
            </div>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};
export default RecetteItem;
