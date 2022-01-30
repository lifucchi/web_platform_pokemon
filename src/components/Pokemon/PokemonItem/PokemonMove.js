import React from "react";

const PokemonMove = (props) => {
    return (
        <li >
            <div>
                <h4>{props.pokemonMove}</h4>
            </div>
        </li>
    );
};

export default PokemonMove;