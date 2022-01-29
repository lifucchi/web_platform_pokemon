import React, {useContext} from "react";
import classes from './PokemonItem.module.css'
import Card from "../../UI/Card";
import PokemonItemForm from "./PokemonItemForm";
import MyPokemonContext from "../../../store/myPokemon-context";

const PokemonItem = props => {
    // const price = `$${props.price.toFixed(2)}` ;
    const myPokemonctx = useContext(MyPokemonContext);
    const addToMyPokemonHandler = amount =>{
          
        myPokemonctx.addItem({
            id:props.id,
            name: props.name,
            amount: amount
        });
    };

    return (
        <Card>
            <li className={classes.meal}>
                <div>
                    <h3 className={classes.name} >{props.name}</h3>
                    {/* <div className={classes.description}>{props.name} </div> */}
                    <div className={classes.price}>{props.name} </div>
                </div>
                <div>
                   <PokemonItemForm onAddToMyPokemons={addToMyPokemonHandler}  id={props.id} /> 
                </div>
            </li>
        </Card>

    );
};

export default PokemonItem;