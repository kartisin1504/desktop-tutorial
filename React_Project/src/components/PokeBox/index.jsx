import React from 'react';
import {PokemonHOC} from '../../containers/Pokemon';
import {withRouter} from 'react-router';
import './styles.css';

class PokeBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const pokeBox = this.props.pokeBox;
    const pokemonCount = this.props.pokeBox.length;
    return (
      <div className="pokebox">
        <h2 className="pokebox-heading">PokeBox</h2>
        <h4 className="pokebox-sub-heading">{pokemonCount} Pokemon Caught</h4>
        <div className="pokebox-pokemon-wrapper">
          {pokeBox.length > 0
            ? pokeBox.map((pokemon, index) => {
                return (
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.clearCurrentPokemon();
                      this.props.history.push('/pokedex/' + pokemon.name);
                    }}
                    className="pokebox-pokemon"
                    key={index}
                  >
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprite} />
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default PokemonHOC(withRouter(PokeBox));
