import React from "react";
import PropTypes from "prop-types";
import { getTypeColor } from "../../utils/poke";
import { PokemonHOC } from "../../containers/Pokemon";
import "./styles.css";

function pillWrapper(content, type) {
  return (
    <span
      className='pokedetails-pill'
      style={{ backgroundColor: getTypeColor(type) }}
    >
      {content}
    </span>
  );
}

class PokeDetails extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.searchedPokemon) {
      this.props.getPokemonRequest(this.props.searchedPokemon);
    }
    this.state = { pokemon: this.props.currentPokemon };
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPokemon.id !== prevProps.currentPokemon.id) {
      this.setState({ pokemon: this.props.currentPokemon });
    }
  }

  render() {
    const pokemon = this.state.pokemon;

    return pokemon.name ? (
      <div>
        <div className='flex-container'>
          <span className='dot' />
          <img className='image' src={pokemon.image || pokemon.sprite} />
        </div>
        <div className='flex-container'>
          {pillWrapper(`# ${pokemon.id}`, pokemon.types[0])}
          <h2 className='pokedetails-name'>{pokemon.name}</h2>
          <ul className='pokedetails-info-list'>
            <li className='pokedetails-info-list-item'>
              <p className='pokedetails-heading'>type</p>
              {pokemon.types.length &&
                pokemon.types.map((type, index) =>
                  pillWrapper(pokemon.types[index], type)
                )}
            </li>
            <li className='pokedetails-info-list-item'>
              <p className='pokedetails-heading'>height</p>
              {pillWrapper(`${Math.round(pokemon.height * 10)}cm`)}
            </li>
            <li className='pokedetails-info-list-item'>
              <p className='pokedetails-heading'>weight</p>
              {pillWrapper(`${Math.round(pokemon.weight / 10)}kg`)}
            </li>
            <li className='pokedetails-info-list-item'>
              <p className='pokedetails-heading'>number of battles</p>
              {pillWrapper(pokemon.battlesCount)}
            </li>
          </ul>
        </div>
      </div>
    ) : null;
  }
}

PokeDetails.propTypes = {
  currentPokemon: PropTypes.object,
  getPokemonRequest: PropTypes.func,
};

export default PokemonHOC(PokeDetails);
