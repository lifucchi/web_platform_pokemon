import React from "react";
import Modal from '../UI/Modal'
import classes from './MyPokemon.module.css';

const MyPokemons = (props) => {
    const MyPokemonItems =<ul  className={classes['cart-items']}>
        {
            [{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map((item) => (
                <li>{item.name}</li>
            ) )
        }
    </ul> 
    return(
        <Modal onClose = {props.onClose}>
            {MyPokemonItems}
            <div>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions} >
                <button className={classes['button--alt']} onClick={props.onClose} >  Close</button>
                <button className={classes.button} >Order</button>
            </div>
        </Modal>
    );
}

export default MyPokemons;