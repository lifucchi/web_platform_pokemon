import React, { useContext, useState } from "react";
import classes from './PokemonItem.module.css'
import Card from "../../UI/Card";
import PokemonItemForm from "./PokemonItemForm";
import MyPokemonContext from "../../../store/myPokemon-context";

const PokemonItem = (props) => {

    const myPokemonctx = useContext(MyPokemonContext);

    const addToMyPokemonHandler = nama => {
        console.log("ini di pokemin item " + nama);
        myPokemonctx.addItem({
            id: props.id,
            name: props.name,
            namePokemon: nama,
            amount: 1
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
            <li onClick={showPokemonsHandler}   >
                <h3 className={classes.name}>{props.pokemon.name}</h3>
            </li>
            <div>
                {pokemonDetailIsShown && <PokemonItemForm isPokemon={props.pokemon} onClose={hidePokemonsHandler} onAddToMyPokemons={addToMyPokemonHandler} id={props.id} />}
            </div>
        </Card>

    );
};

export default PokemonItem;