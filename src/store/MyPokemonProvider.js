import React, { useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
import MyPokemonContext from "./myPokemon-context";


const defaultMyPokemonsState = {
    items: [],
    totalAmount: 0
}

const myPokemonReducer = (state, action) => {
    if (action.type === 'ADD') {
        // console.log(state);
        // console.log(action);
        // const existingCartItemIndex = state.items.findIndex(
        //     (item) => item.id === action.item.id
        // );
        // const existingCartItem = state.items[existingCartItemIndex];
        // let updatedItems;

        // if (existingCartItem) {
        //     const updatedItem = {
        //         id: existingCartItem.id,
        //         name: existingCartItem.name,
        //         amount: existingCartItem.amount + action.item.amount,
        //     };
        //     updatedItems = [...state.items];
        //     updatedItems[existingCartItemIndex] = updatedItem;
        // } else {
        //     updatedItems = state.items.concat(action.item);
        // }

        // return {
        //     items: updatedItems,
        // };
        const updatedItems = state.items.concat(action.item);

        return {
            items: updatedItems,

        };

    }

    if (action.type === 'REMOVE') {
        //         const existingCartItemIndex = state.items.findIndex(
        //             (item) => item.id === action.id
        //           );
        //           const existingItem = state.items[existingCartItemIndex];

        //           console.log(state.items);
        // console.log("ini action");
        //           console.log(action);

        //           if (existingItem.amount === 1) {

        //             // updatedItems = state.items.filter(item => item.namePokemon !== action.namePokemon);

        //           } else {
        //             const updatedItem = { id:existingItem.id,name:existingItem.name, amount: existingItem.amount - 1 };
        //             updatedItems = [...state.items];
        //             updatedItems[existingCartItemIndex] = updatedItem;
        //           }
        let updatedItems;
        updatedItems = state.items.filter(item => item.namePokemon !== action.id);
        console.log(action);


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
    //   const [myPokemonsState, dispatchMyPokemosAction] = useReducer(myPokemonReducer, defaultMyPokemonsState)


    useEffect(() => {
        // storing input name
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