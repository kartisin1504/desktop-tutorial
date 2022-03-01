import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {
  watchGetPokemonRequest,
  watchCatchPokemonRequest,
} from '../store/pokemon/sagas';
import {pokemon} from '../store/pokemon/reducer';
import {fork, all} from 'redux-saga/effects';

function* sagas() {
  yield all([fork(watchGetPokemonRequest), fork(watchCatchPokemonRequest)]);
}

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    pokemon,
  });

export {createRootReducer, sagas};
