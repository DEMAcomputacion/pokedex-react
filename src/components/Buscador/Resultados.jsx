import React from "react";
import capitalize from "../../commons/capitalize";
import './index.css'

function Resultados(props) {
  return (
    <>
      {props.filteredData.length !== 0 && "Resultados:"}
      <div className="search-results">
        {props.filteredData.map((pokemon) => (
          <div
            className="search-item"
            key={pokemon.name}
            onClick={props.mostrarModal}
            id={pokemon.url}
          >
            {capitalize(pokemon.name)}
          </div>
        ))}
      </div>
    </>
  );
}

export default Resultados;
