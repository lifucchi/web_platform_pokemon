import React from "react";
import classes from './PokemonMove.module.css';


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