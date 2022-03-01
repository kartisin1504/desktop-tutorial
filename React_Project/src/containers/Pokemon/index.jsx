import React, {Component} from 'react';
import {connect} from 'react-redux';

export function PokemonHOC(WrappedComponent) {
  class pokeContainer extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStatetoProps(state) {
    return {
      currentPokemon: state.pokemon.currentPokemon,
      pokeBox: state.pokemon.pokeBox,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      getPokemonRequest: function (identifier) {
        return dispatch({type: 'GET_POKEMON', payload: identifier});
      },
      catchPokemon: function (pokemon) {
        return dispatch({type: 'CATCH_POKEMON', payload: pokemon});
      },
      clearCurrentPokemon: function () {
        return dispatch({type: 'CLEAR_CURRENT_POKEMON'});
      },
    };
  }

  return connect(mapStatetoProps, mapDispatchToProps)(pokeContainer);
}
