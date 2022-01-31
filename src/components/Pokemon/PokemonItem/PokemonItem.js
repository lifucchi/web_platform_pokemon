import React, { useContext, useState } from "react";
import classes from './PokemonItem.module.css'
import Card from "../../UI/Card";
import PokemonItemForm from "./PokemonItemForm";
import MyPokemonContext from "../../../store/myPokemon-context";

const PokemonItem = (props) => {

    const myPokemonctx = useContext(MyPokemonContext);

    const addToMyPokemonHandler = nama => {
        myPokemonctx.addItem({
            id: props.id,
            name: props.name,
            namePokemon: nama,
            amount: 1
        });

    };

    const [pokemonDetailIsShown, setPokemonDetailIsShown] = useState(false);

    const hidePokemonsHandler = () => {
        setPokemonDetailIsShown(false);
    };

    const showPokemonsHandler = (pokemon) => {
        setPokemonDetailIsShown(true);
    };

    return (
        <Card  >
            <li >
                <h3 className={classes.name}>{props.pokemon.name}</h3>
                <div className={classes.actions}>
                    <button className={classes['actions .button--alt']} onClick={showPokemonsHandler} >
                        Detail 
                    </button>
                </div>
            </li>

            <div>
                {pokemonDetailIsShown && <PokemonItemForm isPokemon={props.pokemon} onClose={hidePokemonsHandler} onAddToMyPokemons={addToMyPokemonHandler} id={props.id} />}
            </div>
        </Card>
    );
};

export default PokemonItem;