async function buscarPokemon (id) {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

export default buscarPokemon;