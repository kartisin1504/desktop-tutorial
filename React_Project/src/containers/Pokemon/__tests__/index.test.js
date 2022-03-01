import React from "react";
import { shallow } from "enzyme";
import { PokemonHOC } from "../index";
import PokeEncounters from "../../../components/PokeEncounters";

describe("PokemonHOC", () => {
  it("passes props to its children", () => {
    const mockState = {
      pokemon: {
        currentPokemon: {
          id: 2,
          name: "ted",
        },
      },
    };
    const HocComponent = PokemonHOC(PokeEncounters);
    const wrapper = shallow(<HocComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
