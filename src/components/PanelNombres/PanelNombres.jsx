import React, {useState}from "react";
import llamarListadoPokemones from "../../api/llamarListadoPokemones.js";
import {useFetchListado} from "../../hooks/useFetch.jsx";
import Loading from "../Loading/Loading.jsx";
import ModalPokemon from "../Modals/Modal.jsx";
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
            <span className="pokemon-number">{(elem.url.slice(34)).slice(0, -1)}</span>
            {elem.name.toUpperCase()}
          </div>
        ))}
        <ModalPokemon trigger={modalVisibility} setTrigger={setModalVisibility} id={nroPokemon}/>
      </div>
    );

  return null;
}

export default PanelNombres;
