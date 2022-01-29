import React, { useContext } from "react";
import Modal from '../UI/Modal'
import classes from './MyPokemon.module.css';
import MyPokemonContext from "../../store/myPokemon-context";
import MyPokemonItem from "./MyPokemonItem";

const MyPokemons = (props) => {

    const myPokemonctx = useContext(MyPokemonContext);

    const totalAmount = myPokemonctx.totalAmount.toFixed(2);
    const hasItem = myPokemonctx.items.length > 0;

    const myPokemonItemRemoveHandler = id => {

    };

    const myPokemonItemAddHandler = item => {

    };


    const MyPokemonItems =
    <ul  className={classes['cart-items']}>
        {
            myPokemonctx.items.map((item) => (
                // <li>{item.name}</li>
                <MyPokemonItem 
                key = {item.id} 
                name= {item.name}
                amount = {item.amount}
                onRemove =  {myPokemonItemRemoveHandler.bind(null, item.id)}
                onAdd =  {myPokemonItemAddHandler.bind(null, item )}

                />
            ) )
        }
    </ul> 
    return(
        <Modal onClose = {props.onClose}>
            {MyPokemonItems}
            <div>
                {/* <span>Total Amount</span>    */}
                {/* <span>{totalAmount}</span> */}
            </div>
            <div className={classes.actions} >
                <button className={classes['button--alt']} onClick={props.onClose} >  Close</button>
                {hasItem && <button className={classes.button} >Order</button>}
            </div>
        </Modal>
    );
}

export default MyPokemons;