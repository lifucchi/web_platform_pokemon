import React, { useContext } from "react";
import CartIcon from '../MyPokemon/MyPokemonIcon';
import MyPokemonContext from "../../store/myPokemon-context";
import classes from './HeaderPokemonButton.module.css';



const HeaderPokemonButton = (props) => {
    const MyPokemonCtx = useContext(MyPokemonContext);
    const numberMyPokemonItems= MyPokemonCtx.items.reduce((curNumber,item)=>{
        return curNumber+ item.amount
    },0);

    return (

        <button className={classes.button} onClick={props.onClick} >
            <span className={classes.icon} ></span>
            <CartIcon/>
            <span>My Pokemon</span>
            <span className={classes.badge} >{numberMyPokemonItems}</span>
        </button>
    );
};

export default HeaderPokemonButton;