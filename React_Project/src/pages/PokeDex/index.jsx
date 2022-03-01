import React from 'react';
import PokeDetails from '../../components/PokeDetails';
import PokeSearch from '../../components/PokeSearch';

class PokeDex extends React.Component {
  render() {
    return (
      <section id="pokedex" className="pokedex-content">
        <PokeSearch />
        <PokeDetails searchedPokemon={this.props.searchedPokemon} />
      </section>
    );
  }
}

export default PokeDex;
