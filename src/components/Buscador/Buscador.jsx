import React, { useEffect, useState } from "react";
import llamarListadoPokemones from "../../api/llamarListadoPokemones";
import urlToId from "../../commons/urlToId.js";
import {useFetchListado} from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";
import ModalPokemon from "../Modals/Modal";
import Resultados from "./Resultados";
import "./index.css";

function Buscador(props) {
  const [toSearch, setToSearch] = useState("");
  const [datos, setDatos] = useState("");
  const { data } = useFetchListado(llamarListadoPokemones, props.limit);
  const filteredData = useSearch(datos, toSearch);
  const [nroPokemon, setNroPokemon] = useState(null)
  const [modalVisibility, setModalVisibility] = useState(false)

  useEffect(() => {
    if (Boolean(data)) {
      setDatos(data);
    }
  }, [data]);

  const onChangeInputSearch = (e) => {
    setToSearch(e.target.value);
  };

  const mostrarModal = (e) => {
    const idPokemon = urlToId(e.target.id)
    console.log(e.target)
    setNroPokemon(idPokemon)
    setModalVisibility(true)
  }

  return (
    <>
    <div className="contenedor">
      <input
        className="input-query-busqueda"
        type="text"
        placeholder="Escriba para buscar..."
        onChange={onChangeInputSearch}
        value={toSearch}
      />
      <hr />
      <Resultados filteredData={filteredData} mostrarModal={mostrarModal} />
    </div>
    <ModalPokemon trigger={modalVisibility} setTrigger={setModalVisibility} id={nroPokemon}/>
  </>
  );
}

export default Buscador;
