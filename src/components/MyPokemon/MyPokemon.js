import React, { useContext } from "react";
import Modal from '../UI/Modal'
import classes from './MyPokemon.module.css';
import MyPokemonContext from "../../store/myPokemon-context";
import MyPokemonItem from "./MyPokemonItem";

const MyPokemons = (props) => {

    const myPokemonctx = useContext(MyPokemonContext);
    const myPokemonItemRemoveHandler = namePokemon => {
        myPokemonctx.removeItem(namePokemon);
    };

    const myPokemonItemAddHandler = item => {
        // console.log(item);
        myPokemonctx.addItem(
            { id :item.id, name: item.name , amount: 1 }
            );
    };


    const MyPokemonItems =
    <ul  className={classes['cart-items']}>
        {
            myPokemonctx.items.map((item) => (
                <MyPokemonItem 
                key = {item.id} 
                name= {item.name}
                amount = {item.amount}
                namePokemon ={item.namePokemon}
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

            </div>
            <div className={classes.actions} >
                <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
            </div>
        </Modal>
    );
}

export default MyPokemons;