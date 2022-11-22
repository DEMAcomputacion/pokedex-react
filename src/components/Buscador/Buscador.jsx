import React, { useEffect, useState } from "react";
import llamarListadoPokemones from "../../api/llamarListadoPokemones";
import {useFetchListado} from "../../hooks/useFetch";
import useSearch from "../../hooks/useSearch";
import "./Buscador.css";

function Buscador(props) {
  const [toSearch, setToSearch] = useState("");
  const [datos, setDatos] = useState("");
  const { data } = useFetchListado(llamarListadoPokemones, props.limit);
  const filteredData = useSearch(datos, toSearch);

  useEffect(() => {
    if (data) {
      setDatos(data);
    }
  }, [data]);

  const onChangeInputSearch = (e) => {
    setToSearch(e.target.value);
  };
  console.log(data)

  return (
    <div className="contenedor">
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
          <div className="search-item" key={elem.name}>{elem.name.toUpperCase()}</div>
        ))}
      </div>
    </div>
  );
}

export default Buscador;
