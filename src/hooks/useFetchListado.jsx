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

export function useFetchListado(fetchResource, limit, offset) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const fetch = async () => {
      dispatch({ type: "CARGANDO" });
      try {
        const response = await fetchResource(limit, offset);
        dispatch({ type: "EXITO", payload: response });
      } catch (error) { 
        dispatch({ type: "FALLO", payload: error });
      }
    };
    fetch();
  }, [fetchResource, offset, limit]);

  return state;
}
