const initialState = {
  currentPokemon: {},
  pokeBox: [],
};

export const pokemon = (
  state = initialState,
  action = { type: null, payload: null }
) => {
  switch (action.type) {
    case "GET_POKEMON_SUCCESS":
      return Object.assign({}, state, {
        currentPokemon: action.payload,
      });
    case "CLEAR_CURRENT_POKEMON":
      return Object.assign({}, state, {
        currentPokemon: {},
      });
    case "CATCH_POKEMON_SUCCESS":
      const updatedPokeBox = state.pokeBox.slice();
      updatedPokeBox.push(action.payload);
      return Object.assign(state, {
        pokeBox: updatedPokeBox,
      });
    default:
      return state;
  }
};
