import React, { Fragment } from "react";
import DataPokemon from "./DataPokemon";
import PokemonSummary from "./PokemonSummary";

const Pokemon = () =>{
    return <Fragment>
        <PokemonSummary/>
        <DataPokemon/>
    </Fragment>

}

export default Pokemon;