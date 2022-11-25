import React from "react";
import MostrarPokemon from "../MostrarPokemon/MostrarPokemon";
import "./Modal.css";

function ModalPokemon(props) {
  return props.trigger ? (
    <>
    <div className="popup-background" onClick={() => props.setTrigger(false)}>
      <div className="popup-container"  style={{ display: "flex" }}>
        <div className="popup">
          <MostrarPokemon id={props.id}/>
        </div>
      </div>
    </div>
    </>
  ) : (
    ""
  );
}

export default ModalPokemon;
