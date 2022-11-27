import { useEffect, useReducer } from "react";

const initialState = { loading: false, data: null, error: null };

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CARGANDO":
      return { loading: true, data: null, error: null };
    case "EXITO":
      return { loading: false, data: payload, error: null };
    case "FALLO":
      return { loading: false, data: null, error: payload };
    default:
      return state;
  }
};

export function useFetchListado(fetchResource, param) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (localStorage.getItem('listado')) {
      const listado = JSON.parse(localStorage.getItem('listado'))
      dispatch({ type: 'EXITO', payload: listado });
      return;
    }

    const fetch = async () => {
      dispatch({ type: "CARGANDO" });
      try {
        const response = await fetchResource(param);
        localStorage.setItem('listado', JSON.stringify(response))
        dispatch({ type: "EXITO", payload: response });
      } catch (error) {
        dispatch({ type: "FALLO", payload: error });
      }
    };
    fetch();
  }, [fetchResource, param]);

  return state;
}

export function useFetchPokemon(fetchResource, param) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (localStorage.getItem(`Pokemon${param}`)) {
      const listado = JSON.parse(localStorage.getItem(`Pokemon${param}`))
      dispatch({ type: 'EXITO', payload: listado });
      return;
    }

    const fetch = async () => {
      dispatch({ type: "CARGANDO" });
      try {
        const response = await fetchResource(param);
        localStorage.setItem(`Pokemon${param}`, JSON.stringify(response))
        dispatch({ type: "EXITO", payload: response });
      } catch (error) {
        dispatch({ type: "FALLO", payload: error });
      }
    };
    fetch();
  }, [fetchResource, param]);

  return state;
}