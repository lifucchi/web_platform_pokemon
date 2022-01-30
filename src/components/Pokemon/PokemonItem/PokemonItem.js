import React, { useContext, useState } from "react";
import classes from './PokemonItem.module.css'
import Card from "../../UI/Card";
import PokemonItemForm from "./PokemonItemForm";
import MyPokemonContext from "../../../store/myPokemon-context";
import Modal from '../../UI/Modal'



const PokemonItem = (props) => {

    const myPokemonctx = useContext(MyPokemonContext);
    const addToMyPokemonHandler = amount => {
        myPokemonctx.addItem({
            id: props.id,
            name: props.name,
            amount: amount
        });

    };

    const [pokemonDetailIsShown, setPokemonDetailIsShown] = useState(false);
    // const [selectedProject, setSelectedProject] = useState(null);


    const hidePokemonsHandler = () => {
        // setSelectedProject(null);
        setPokemonDetailIsShown(false);
    };

    const showPokemonsHandler = (pokemon) => {
        // setSelectedProject(pokemon);
        setPokemonDetailIsShown(true);
    };

    return (
        <Card >
            <li  onClick={showPokemonsHandler}   >
                {/* <div> */}
                    {/* <div > */}
                        <h3 className={classes.name}>{props.pokemon.name}</h3>
                    {/* </div> */}
                {/* </div> */}
            </li>
            <div>
                {pokemonDetailIsShown && <PokemonItemForm isPokemon={props.pokemon} onClose={hidePokemonsHandler} onAddToMyPokemons={addToMyPokemonHandler} id={props.id} />}
            </div>
        </Card>

    );
};

export default PokemonItem;