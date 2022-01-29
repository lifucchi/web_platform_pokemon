import React, { useRef, useState } from "react";
import classes from './PokemonItemForm.module.css'
import Input from "../../UI/Input";

const PokemonItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();
    
    const submitHander = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToMyPokemons(enteredAmountNumber)

    };


    return <form className={classes.form} onSubmit={submitHander}>
        <Input
            ref = {amountInputRef}
            label='Amount'
            input={{
                id: 'amount_' + props.id, // this changed!
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
        <button>+ Detail</button>
        {!amountIsValid && <p>Maaf anda belum beruntung</p> }
    </form>

}

export default PokemonItemForm;