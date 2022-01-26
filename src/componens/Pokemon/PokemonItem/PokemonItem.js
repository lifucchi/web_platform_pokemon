import React from "react";
import classes from './PokemonItem.module.css'

const PokemonItem = props => {
    const price = `$${props.price.toFixed(2)}` ;
    return (
        <li className={classes.meal}>
            <div>
                <h3> {props.name}</h3>
                <div className={classes.description}> {props.description} </div>
                <div className={classes.price} > {price} </div>
            </div>
        </li>
    );
};

export default PokemonItem;