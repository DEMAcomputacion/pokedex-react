async function buscarPokemon (id) {
    const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!response.ok){
        throw new Error("problemas...")
    }
    return response.json();
}

export default buscarPokemon;