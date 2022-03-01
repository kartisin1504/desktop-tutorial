import React from "react";
import PokeDetails from "../index";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { testRender } from "../../../../tests/helper";

describe("PokeDetails", () => {
  const mockStore = configureMockStore([]);
  it("", () => {
    const store = mockStore({
      pokemon: {
        currentPokemon: {
          id: 1,
          name: "bulbasaur",
          image: "some image",
          types: ["dark"],
          height: 7,
          weight: 29,
          battlesCount: 200,
        },
      },
    });
    const { asFragment, getByText } = testRender(
      <Provider store={store}>
        <PokeDetails />
      </Provider>
    );
    expect(getByText("bulbasaur")).toBeInTheDocument();
  });
});
