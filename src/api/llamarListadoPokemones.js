async function llamarListadoPokemones (limit) {
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`);
    if(!response.ok){
        throw new Error("problemas...")
    }
    return response.json();
}

export default llamarListadoPokemones;