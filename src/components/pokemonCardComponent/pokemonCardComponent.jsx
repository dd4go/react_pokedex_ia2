import "./pokemonCardComponent.css"
import { Col } from "react-bootstrap"
import { getPokemonDetails } from "../../services/pokeApiService"
import { formatPokedexPosition } from "../../services/helperService"
import { useEffect, useState } from "react";

function PokemonCardComponent({ name, url }) {

    const [hp, setHp] = useState(0);
    const [pokedexPosition, setPokedexPosition] = useState("");
    const [image, setImage] = useState("");
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getPokemonDetails(url).then((response) => {
            setHp(response.stats[0].base_stat);
            setPokedexPosition(formatPokedexPosition(response.order));
            setImage(response.sprites.front_default);
            setTypes(response.types);
        });
    }, [url]);

    const mainType = types[0]?.type.name
    return (
        <Col lg={4} md={6} sm={12} className="mb-4">
            <div className={`pokemon-card border-${mainType}`}>

                <div className="pokemon-card-header">
                    <span className="pokedex-position">#{pokedexPosition}</span>
                    <span className="hp">HP {hp}</span>
                </div>

                <div className="pokemon-image">
                    <img src={image} alt={name} />
                </div>

                <h5 className="pokemon-name text-capitalize">{name}</h5>

                <div className="pokemon-types">
                    {types.map((type, index) => (
                        <span key={index} className={`type ${type.type.name}`}>
                            {type.type.name}
                        </span>
                    ))}
                </div>

            </div>
        </Col>
    )

}

export default PokemonCardComponent
