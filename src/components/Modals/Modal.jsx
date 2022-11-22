import React from "react";
import MuestraPokemon from "../MuestraPokemon/MuestraPokemon";
import "./Modal.css";

function ModalPokemon(props) {
  return props.trigger ? (
    <>
    <div className="popup-background" onClick={() => props.setTrigger(false)}>
      <div className="popup-container"  style={{ display: "flex" }}>
        <div className="popup">
          <MuestraPokemon id={props.id}/>
        </div>
        {props.children}
      </div>
    </div>
    </>
  ) : (
    ""
  );
}

export default ModalPokemon;
