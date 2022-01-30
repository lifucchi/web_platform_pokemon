import Header from "./components/Layout/Header";
import React, { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import MyPokemon from './components/MyPokemon/MyPokemon'
import  MyPokemonProvider  from "./store/MyPokemonProvider";

function App() {
    const [myPokemonDetailIsShown, setMyPokemonDetailIsShown] = useState(false);
    // const [pokemonDetailIsShown, setPokemonDetailIsShown] = useState(false);


    const showMyPokemonsHandler = () => {
        setMyPokemonDetailIsShown(true);
    };

    const hideMyPokemonsHandler = () => {
        setMyPokemonDetailIsShown(false);
    }

    // const showPokemonsHandler = () => {
    //     setPokemonDetailIsShown(true);
    // };

    // const hidePokemonsHandler = () => {
    //     setPokemonDetailIsShown(false);
    // }

    return (
        <MyPokemonProvider>
            {myPokemonDetailIsShown && <MyPokemon onClose={hideMyPokemonsHandler} />}
            <Header onShowMyPokemon={showMyPokemonsHandler} />

            <main>
                 <Pokemon />
            </main>

        </MyPokemonProvider>
    );
}

export default App;