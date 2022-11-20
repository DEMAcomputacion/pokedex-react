import React, { useState, useEffect } from "react";
import llamarListadoPokemones from "../../api/llamarListadoPokemones.js";
import { useFetchListado } from "../../hooks/useFetchListado.jsx";
//import Loading from "../Loading/Loading.jsx";
import "./PanelNombres.css";

function PanelNombres(limit = 40, offset = 0) {
  const { data, error, loading } = useFetchListado(llamarListadoPokemones, 40, 0);


  //if (loading) return <Loading />;
  if (error) return "Something went wrong";
  if (data)
    return (
      <div className="container">
        {data.results.map((elem) => (
          <div key={elem.name}>{elem.name}</div>
        ))}
        {console.log(data.results)}
      </div>
    );

  return null;
}

export default PanelNombres;
