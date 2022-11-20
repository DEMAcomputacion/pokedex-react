async function llamarListadoPokemones (limit, offset) {
    const response =  await fetch(`https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`);
    if(!response.ok){
        throw new Error("problemas...")
    }
    return response.json();
}

export default llamarListadoPokemones;