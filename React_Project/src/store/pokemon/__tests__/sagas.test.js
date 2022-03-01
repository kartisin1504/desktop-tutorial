import { getPokemonSaga, watchGetPokemonRequest } from "../sagas";
import { takeLatest, put, call } from "redux-saga/effects";
import axios from "../../../api/axios";

describe("Pokemon Sagas", () => {
  const mockPokemonResponse = {
    data: {
      id: 1,
      name: "charizard",
      sprite: sprites: {
        front_default: 'some url'
      },
      image: {
        other: {
          dream_world: {
            front_default: "some url",
          },
        },
      },
      height: 16,
      weight: 200,
      order: 1,
      base_experience: 4000,
      game_indices: [{ id: 1 }, { id: 2 }],
      types: [
        {
          type: {
            name: "Dark",
          },
        },
      ],
    },
  };
  it("tests watchGetPokemonRequest", () => {
    const watchGen = watchGetPokemonRequest();
    expect(watchGen.next().value).toEqual(
      takeLatest("GET_POKEMON", getPokemonSaga)
    );
  });
  it("tests getPokemonSaga", () => {
    const mockAction = {
      type: "GET_POKEMON",
      payload: "charizard",
    };
    const pokeGenerator = getPokemonSaga(mockAction);
    let next = pokeGenerator.next();
    expect(next.value).toEqual(call(axios.get, "pokemon/charizard"));
    next = pokeGenerator.next(mockPokemonResponse);
    expect(next.value).toEqual(
      put({ type: "GET_POKEMON_SUCCESS", payload: mockPokemonResponse })
    );
  });
});
