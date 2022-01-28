import React from "react";
import classes from './PokemonItem.module.css'
import Card from "../../UI/Card";
import PokemonItemForm from "./PokemonItemForm";

const PokemonItem = props => {
    // const price = `$${props.price.toFixed(2)}` ;
    return (
        <Card>
            <li className={classes.meal}>
                <div>
                    <h3 className={classes.name} >{props.name}</h3>
                    {/* <div className={classes.description}>{props.name} </div> */}
                    <div className={classes.price}>{props.name} </div>
                </div>
                <div>
                   <PokemonItemForm  id={props.id} /> 
                </div>
            </li>
        </Card>

    );
};

export default PokemonItem;