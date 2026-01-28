const BASE_URL = "https://pokeapi.co/api/v2/pokemon"

export async function getPokemons() {
    const response = await fetch(`${BASE_URL}?limit=151&offset=0`)
    return response.json()
}

export async function getPokemonDetails(url) {
    const response = await fetch(url)
    return response.json()
}
