import React, { useState, useEffect } from "react";
import llamarListadoPokemones from "../../api/llamarListadoPokemones.js";
import { useFetchListado } from "../../hooks/useFetchListado.jsx";
import Loading from "../Loading/Loading.jsx";
import "./PanelNombres.css";

function PanelNombres(offset = 40, limit = 40) {
  const {data, error, loading} = useFetchListado(llamarListadoPokemones, offset, limit);


  if (loading) return <Loading />;
  if (error) return "Something went wrong";
  if (data)
    return (
      <>
      <h1>data</h1>
      </>
    );

  return null;
}

export default PanelNombres;
