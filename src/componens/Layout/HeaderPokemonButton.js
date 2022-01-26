import React, { Fragment } from "react";
import classes from './HeaderPokemonButton.module.css';
import CartIcon from '../MyPokemon/MyPokemonIcon';


const HeaderPokemonButton = () => {
    return (

        <button className={classes.button}>
            <span className={classes.icon} ></span>
            <CartIcon/>
            <span>My Pokemon</span>
            {/* <span className={classes.badge} ></span> */}
        </button>
    );
};

export default HeaderPokemonButton;