import React, { useRef, useState } from "react";
import classes from './PokemonItemForm.module.css'
import Input from "../../UI/Input";
import Modal from '../../UI/Modal'
import PokemonMove from "./PokemonMove";


const PokemonItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHander = (event) => {
        event.preventDefault();
            const enteredAmount = amountInputRef.current.value;
            const enteredAmountNumber = enteredAmount;
            props.onAddToMyPokemons(enteredAmountNumber)
            setAmountIsValid(true);
    };

    const gachaHander = (event) => {
        event.preventDefault();

        const gacha = Math.floor(Math.random() * 101);
        console.log(gacha);

        if (gacha > 50) {
            setAmountIsValid(false);
            return;
        } else {
            setAmountIsValid('dapat');
        }
    };

    const pokemonMoves =
        <ul className={classes['cart-items']}>
            {
                props.isPokemon.moves.map((pokemonStats, index) => (
                    <PokemonMove
                        key={pokemonStats.move.name}
                        pokemonMove={pokemonStats.move.name}
                    />
                ))
            }
        </ul>

    return <Modal onClose={props.onClose}>
        <div className={classes.container}>
            <div className={classes['thumb-container']} >
                <h1>#{props.isPokemon.id}</h1>
                <h2>{props.isPokemon.name}</h2>
            </div>

            <form className={classes.form} onSubmit={submitHander}>
                {<button onClick={gachaHander} >Catch</button>}
                {!amountIsValid && <p>Maaf anda belum beruntung</p>}
                {amountIsValid == 'dapat' && <p>Beri Nama Pokemon</p>}
                {amountIsValid == 'dapat' &&
                    <Input
                        ref={amountInputRef}
                        label='Nama'
                        input={{
                            id: 'amount_' + props.id, // this changed!
                            type: 'text',
                        }}
                    />
                }
                {amountIsValid == 'dapat' && <button >Save Nama</button>}
            </form>
            <br></br>
            <br></br>

            
            <div>
                <h2>Type : {props.isPokemon.types[0].type.name}</h2>
            </div>

            <div className={classes['image-container']}>
                <img className={classes.image} src={props.isPokemon.sprites.other.dream_world.front_default} ></img>
            </div>
            <div>
                <h2>Moves</h2>
                {pokemonMoves}
            </div>
            <br></br>

            <div className={classes.actions} >
                <button className={classes['button--alt']} onClick={props.onClose} >  Close</button>
                {/* {hasItem && <button className={classes.button} >Order</button>} */}
            </div>
        </div>
    </Modal>


}

export default PokemonItemForm;