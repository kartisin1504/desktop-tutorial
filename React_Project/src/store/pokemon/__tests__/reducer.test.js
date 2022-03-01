import { pokemon } from "../reducer";

describe("Pokemon Reducer", () => {
  it("takes a GET_POKEMON_SUCCESS action and returns state correctly", () => {
    const prevState = {
      currentPokemon: {
        id: 1,
        name: "bob",
      },
    };
    const result = pokemon(prevState, {
      type: "GET_POKEMON_SUCCESS",
      payload: { id: 3, name: "Tony" },
    });
    expect(result.currentPokemon.name).toEqual("Tony");
  });
});
