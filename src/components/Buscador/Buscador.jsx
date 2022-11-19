import React from "react";
import './Buscador.css'

function Buscador() {

    const queryBusqueda = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="contenedor">
            <form onSubmit={() => handleSubmit}>
                <input
                    className="input-query-busqueda"
                    type="text"
                    placeholder="Escriba para buscar..."
                    onKeyDown={() => queryBusqueda}
                />
                <input
                    className="button-query-busqueda"
                    type="button"
                    value="Buscar"
                />
            </form>
        </div>
    )
}

export default Buscador;