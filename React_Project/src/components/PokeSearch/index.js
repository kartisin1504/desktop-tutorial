import React from 'react';
import PropTypes from 'prop-types';
import {PokemonHOC} from '../../containers/Pokemon';
import {withRouter} from 'react-router';

import './styles.css';

class PokeSearch extends React.Component {
  onSubmitHandler(e) {
    e.preventDefault();
    this.props.getPokemonRequest(this.state.search);
    this.props.history.push(`/pokedex/${this.state.search}`);
  }
  render() {
    return (
      <form
        className="poke-search-form"
        onSubmit={this.onSubmitHandler.bind(this)}
      >
        <div className="poke-search-input-wrapper">
          <input
            className="poke-search-input"
            type="text"
            minLength="1"
            required
            maxLength="20"
            id="poke-search"
            onChange={(e) =>
              this.setState({
                search: e.target.value.toLowerCase(),
              })
            }
            placeholder="Pokedex Search"
          />
          <button type="submit" className="poke-search-submit-btn">
            Search
          </button>
        </div>
      </form>
    );
  }
}

PokeSearch.propTypes = {
  getPokemonRequest: PropTypes.func,
  history: PropTypes.object,
};

export default PokemonHOC(withRouter(PokeSearch));
