import { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import PokemonCardComponent from '../components/pokemonCardComponent/pokemonCardComponent'
import { getPokemons } from "../services/pokeApiService"

function Home() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons().then((response) => {
            setPokemons(response.results)
        })
    }, [])

    return (
        <Row>
            {pokemons.map((pokemon, index) => (
                <PokemonCardComponent
                    key={index}
                    name={pokemon.name}
                    url={pokemon.url}
                />
            ))}
        </Row>
    )
}

export default Home
