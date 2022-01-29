import Header from "./components/Layout/Header";
import React, { Fragment, useState } from "react";
import Pokemon from "./components/Pokemon/Pokemon";
import MyPokemon from './components/MyPokemon/MyPokemon'
import  MyPokemonProvider  from "./store/MyPokemonProvider";

function App() {
    const [myPokemonDetailIsShown, setMyPokemonDetailIsShown] = useState(false);

    const showPokemonDetailHandler = () => {
        setMyPokemonDetailIsShown(true);
    };

    const hidePokemonDetailHandler = () => {
        setMyPokemonDetailIsShown(false);
    }

    return (
        <MyPokemonProvider>
            {myPokemonDetailIsShown && <MyPokemon onClose={hidePokemonDetailHandler} />}
            <Header onShowMyPokemon={showPokemonDetailHandler} />
            
            <main>
                <Pokemon />
            </main>
        </MyPokemonProvider>
    );
}

export default App;