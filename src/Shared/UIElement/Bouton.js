import React from "react";
import "./Bouton.css";
const Bouton = (props) => {
  return (
    <button
      className={`bouton bouton--${props.size || "default"} ${
        props.inverse && "bouton--inverse"
      } ${props.danger && "button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Bouton;
