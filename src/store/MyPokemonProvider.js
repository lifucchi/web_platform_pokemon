import React, { useReducer, useEffect } from "react";

import MyPokemonContext from "./myPokemon-context";


const defaultMyPokemonsState = {
    items: [],
    totalAmount: 0
}

const myPokemonReducer = (state, action) => {
    if (action.type === 'ADD') {
        const d = new Date();
        let ms = d.valueOf();
        const updatedItem = {
            id: ms,
            name: action.item.name,
            amount: action.item.amount,
            namePokemon: action.item.namePokemon,
        };
        const updatedItems = state.items.concat(updatedItem);
        return {
            items: updatedItems,
        };
    }

    if (action.type === 'REMOVE') {

        let updatedItems;
        updatedItems = state.items.filter(item => item.id !== action.id);

        return {
            items: updatedItems,
        };
    }
    return defaultMyPokemonsState;
}



const MyPokemonProvider = (props) => {

    const [myPokemonsState, dispatchMyPokemosAction] = useReducer(myPokemonReducer, defaultMyPokemonsState, () => {
        const localData = localStorage.getItem('items');
        return localData ? JSON.parse(localData) : defaultMyPokemonsState;
    })

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(myPokemonsState));
    }, [myPokemonsState]);


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