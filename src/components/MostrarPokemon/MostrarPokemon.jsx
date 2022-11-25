import React from "react";
import { useFetchPokemon } from "../../hooks/useFetch";
import buscarPokemon from "../../api/buscarPokemon.js";
import Loading from "../Loading/Loading";
import capitalize from "../../commons/capitalize.js";
import FallbackImage from '../../commons/pokeball-fallback.png'
import "./MostrarPokemon.css";

function MostrarPokemon(props) {
  const { data, error, loading } = useFetchPokemon(buscarPokemon, props.id);

  if (loading) return <Loading />;
  if (error) return "Algo salió mal";
  if (data)
    return (
      <div className="pokemon-card-container">
        <div className="pokemon-card">
          <div className="background">
            <img
              src={data.sprites.other.home.front_default || FallbackImage}
              alt="Pokemon"
              className="pokemon-image"
            />
            <h1 className="pokemon-name">{capitalize(data.name)}</h1>
            <div className="pokemon-stats">
              <span className="stats-height">Height: {data.height}</span>
              <span className="stats-weight">Weight: {data.weight}</span>
            </div>
          </div>
          <div className="content">
            <div className="pokemon-abilities">
              <h3>Abilities</h3>
              <ul>
                {data.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

  return null;
}

export default MostrarPokemon;
