import React, { useReducer } from "react";
import MyPokemonContext from "./myPokemon-context";


const defaultMyPokemonsState = {
    items: [],
    totalAmount: 0
}

const myPokemonReducer = (state, action) => {
    if (action.type === 'ADD') {
        // const updatedTotalAmount =
        //     state.totalAmount + action.item.price * action.item.amount;
        let count = 0
        count = count + 1;
        console.log("iterasi " + count)
        console.log(state);
        // console.log(action);
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        console.log(existingCartItemIndex);
        const existingCartItem = state.items[existingCartItemIndex];
        // console.log("existingCartItem")
        // console.log(existingCartItem)
        let updatedItems;

        // console.log();

        if (existingCartItem) {
            const updatedItem = {
                id: existingCartItem.id,
                name: existingCartItem.name,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            // totalAmount: updatedTotalAmount,
        };

    }
    else if (action.type === 'REMOVE') {

    }


    return defaultMyPokemonsState;
}

const MyPokemonProvider = props => {

    const [myPokemonsState, dispatchMyPokemosAction] = useReducer(myPokemonReducer, defaultMyPokemonsState)

    const addItemToMyPokemonHandler = item => {
        dispatchMyPokemosAction({ type: 'ADD', item: item });

    };

    const removeItemFromMyPokemonHandler = id => {
        dispatchMyPokemosAction({ type: 'REMOVE', id: id })

    };

    const pokemonContex = {
        items: myPokemonsState.items,
        totalAmount: 0,
        addItem: addItemToMyPokemonHandler,
        removeItem: removeItemFromMyPokemonHandler,

    };

    return <MyPokemonContext.Provider value={pokemonContex} >
        {props.children}
    </MyPokemonContext.Provider>
};

export default MyPokemonProvider;