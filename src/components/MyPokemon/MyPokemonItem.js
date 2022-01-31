import React from "react";
import classes from './MyPokemonItem.module.css';

const MyPokemonItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        
        <div  className={classes.summary}>
          <h2 >{props.name} </h2>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
        <div className={classes.summary}>
          <span className={classes.namePokemon}>Name : {props.namePokemon}</span>
          {/* <span className={classes.amount}>x {props.amount}</span> */}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>Remove</button>
        {/* <button onClick={props.onAdd}>+</button> */}
      </div>
    </li>
  );
};

export default MyPokemonItem;
