import { useEffect, useState } from "react";

function useSearch(datos, toSearch) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (toSearch.length > 2) {
      const regex = new RegExp(toSearch, "gi");
      const filtered = datos.results.filter((elem) => elem.name.match(regex));
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [toSearch, datos]);

  return filteredData;
}

export default useSearch;
