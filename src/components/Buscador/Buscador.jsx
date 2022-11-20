import React, { useState } from "react";
import './Buscador.css'

function Buscador() {
    const [toSearch, setToSearch] = useState("")
    //const [data, error, loading] = useFetchOnChange(onChangeInputSearch)

    const onChangeInputSearch = (e) => {
        setToSearch(e.target.value)
    }

    return (
        <div className="contenedor">
                <input
                    className="input-query-busqueda"
                    type="text"
                    placeholder="Escriba para buscar..."
                    onChange={onChangeInputSearch}
                    value={toSearch}
                />
        </div>
    )
}

export default Buscador;