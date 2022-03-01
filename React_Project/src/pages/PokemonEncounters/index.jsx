import React from 'react';
import PokeEncounters from '../../components/PokeEncounters';
import './styles.css';

class PokemonEncounters extends React.Component {
  render() {
    return (
      <section className="poke-encounters-content">
        <PokeEncounters />
      </section>
    );
  }
}

PokemonEncounters.propTypes = {};

export default PokemonEncounters;
