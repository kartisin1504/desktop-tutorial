import React from 'react';
import {PokemonHOC} from '../../containers/Pokemon';
import './styles.css';

class PokeEncounters extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPokemonRequest(Math.floor(Math.random() * 897));
    this.state = {
      newPokemon: true,
    };
  }

  render() {
    const currentPokemon = this.props.currentPokemon;

    return (
      <div className="poke-encounters-container">
        <h2 style={{textAlign: 'center', padding: '20px'}}>
          A wild {currentPokemon.name} appeared!
        </h2>
        <div className="poke-encounter-details">
          <img
            className="pokemon-image animated tada"
            src={currentPokemon.sprite}
            style={{width: '160px'}}
          />
          <span className="poke-encounter-stage" />
        </div>
        <div className="poke-encounter-btn-wrapper">
          <button
            className="poke-encounter-btn run"
            onClick={() =>
              this.props.getPokemonRequest(Math.floor(Math.random() * 897))
            }
          >
            RUN
          </button>
          <button
            className="poke-encounter-btn catch"
            onClick={() => {
              this.props.catchPokemon(currentPokemon);
              this.props.getPokemonRequest(Math.floor(Math.random() * 897));
            }}
          >
            CATCH
          </button>
        </div>
      </div>
    );
  }
}

export default PokemonHOC(PokeEncounters);
