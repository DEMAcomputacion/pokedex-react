import { useEffect, useState } from "react";

function useSearch(datos, toSearch) {
const [filteredData, setFilteredData] = useState([])

useEffect(()=> {

if(toSearch.length > 2){
    const regex = new RegExp(toSearch, 'gi')
    const datulis = datos.results.filter((elem)=> (elem.name.match(regex)))
    setFilteredData(datulis)
}else{
    setFilteredData([])
}

}, [toSearch, datos])

    return filteredData;
}

export default useSearch;