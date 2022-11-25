import React, {useState}from "react";
import llamarListadoPokemones from "../../api/llamarListadoPokemones.js";
import {useFetchListado} from "../../hooks/useFetch.jsx";
import Loading from "../Loading/Loading.jsx";
import ModalPokemon from "../Modals/Modal.jsx";
import urlToId from "../../commons/urlToId.js";
import capitalize from "../../commons/capitalize.js";
import "./PanelNombres.css";

function PanelNombres(props) {
  const { data, error, loading } = useFetchListado(llamarListadoPokemones, props.limit);
  const [modalVisibility, setModalVisibility] = useState(false)
  const [nroPokemon, setNroPokemon] = useState(null)


  const mostrarModal = (e) => {
    setNroPokemon(e.target.id)
    setModalVisibility(true)
  }

  if (loading) return <Loading />
  if (error) return "Something went wrong";
  if (data)
    return (
      <div className="container">
        {data.results.map((elem, index) => (
          <div className="name-card" id={index+1} key={elem.name} onClick={mostrarModal}>
            <span className="pokemon-number">{urlToId(elem.url)}</span>
            {capitalize(elem.name)}
          </div>
        ))}
        <ModalPokemon trigger={modalVisibility} setTrigger={setModalVisibility} id={nroPokemon}/>
      </div>
    );

  return null;
}

export default PanelNombres;
