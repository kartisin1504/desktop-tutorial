import React from "react";
import { Switch, Route } from "react-router-dom";
import PokemonEncounters from "./pages/PokemonEncounters";
import PokeDex from "./pages/PokeDex";
import PokemonCaptured from "./pages/PokemonCaptured";
import MainLayout from "./components/MainLayout";

function Routes() {
  return (
    <MainLayout>
      <Switch>
        <Route
          exact
          path='/'
          render={function () {
            return <PokemonEncounters />;
          }}
        />
        <Route
          exact
          path='/pokeBox'
          render={function () {
            return <PokemonCaptured />;
          }}
        />
        <Route
          path='/pokedex/:pokemon?'
          render={function ({
            match: {
              params: { pokemon },
            },
          }) {
            return <PokeDex searchedPokemon={pokemon} />;
          }}
        />
      </Switch>
    </MainLayout>
  );
}
Routes.propTypes = {};

export default Routes;
