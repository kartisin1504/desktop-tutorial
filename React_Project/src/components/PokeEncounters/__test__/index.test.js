import React from "react";
import PokeEncounters from "../index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { testRender } from "../../../../tests/helper";

describe("PokeEncounters", () => {
  const mockStore = configureMockStore([]);
  it("TEST", () => {
    const store = mockStore({
      pokemon: {
        currentPokemon: {
          id: 1,
          name: "bulbasaur",
          sprite: "some image",
          types: ["dark"],
          height: 7,
          weight: 29,
          battlesCount: 200,
        },
      },
    });
    const { asFragment, getByText } = testRender(
      <Provider store={store}>
        <PokeEncounters />
      </Provider>
    );
    expect(getByText("A wild bulbasaur appeared!")).toBeInTheDocument();
    expect(getByText("CATCH")).toBeInTheDocument();
    expect(getByText("RUN")).toBeInTheDocument();
  });
});
