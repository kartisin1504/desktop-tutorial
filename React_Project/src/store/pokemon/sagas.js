import { takeLatest, call, put } from "redux-saga/effects";
import axios from "../../api/axios";

function normalizeResponse(data) {
  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other.dream_world.front_default,
    sprite: data.sprites.front_default,
    height: data.height,
    weight: data.weight,
    pokedexNumber: data.order,
    experience: data.base_experience,
    types: data.types.map((type) => {
      return type.type.name;
    }),
    battlesCount: data.game_indices.length,
  };
}

export function* getPokemonSaga(action) {
  try {
    const res = yield call(axios.get, `pokemon/${action.payload}`);
    console.log({ res });
    yield put({
      type: "GET_POKEMON_SUCCESS",
      payload: normalizeResponse(res.data),
    });
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetPokemonRequest() {
  yield takeLatest("GET_POKEMON", getPokemonSaga);
}

export function* catchPokemonSaga(action) {
  yield put({
    type: "CATCH_POKEMON_SUCCESS",
    payload: action.payload,
  });
}

export function* watchCatchPokemonRequest() {
  yield takeLatest("CATCH_POKEMON", catchPokemonSaga);
}
