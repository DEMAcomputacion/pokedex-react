import React, { useEffect, useState } from "react";
import llamarListadoPokemones from "../../api/llamarListadoPokemones";
import {useFetchListado} from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";
import ModalPokemon from "../Modals/Modal";
import "./Buscador.css";
import Pokeball from './pokeball.png'

function Buscador(props) {
  const [toSearch, setToSearch] = useState("");
  const [datos, setDatos] = useState("");
  const { data } = useFetchListado(llamarListadoPokemones, props.limit);
  const filteredData = useSearch(datos, toSearch);
  const [nroPokemon, setNroPokemon] = useState(null)
  const [modalVisibility, setModalVisibility] = useState(false)

  useEffect(() => {
    if (data) {
      setDatos(data);
    }
  }, [data]);

  const onChangeInputSearch = (e) => {
    setToSearch(e.target.value);
  };

  const mostrarModal = (e) => {
    const nro = (e.target.id.slice(34)).slice(0, -1)
    setNroPokemon(nro)
    setModalVisibility(true)
  }

  return (
    <>
    <div className="contenedor">
       <img src={Pokeball} alt="Pokeball" className="pokeball" />
      <input
        className="input-query-busqueda"
        type="text"
        placeholder="Escriba para buscar..."
        onChange={onChangeInputSearch}
        value={toSearch}
      />
      <hr />
        {filteredData.length !== 0 && "Resultados:"}
      <div className="search-results">
        {filteredData.map((elem) => (
          <div 
            className="search-item" 
            key={elem.name} 
            onClick={mostrarModal}
            id={elem.url}
            >{elem.name.toUpperCase()}</div>
        ))}
      </div>
    </div>
    <ModalPokemon trigger={modalVisibility} setTrigger={setModalVisibility} id={nroPokemon}/>
  </>
  );
}

export default Buscador;
