import Header from "./componens/Layout/Header";
import React, { Fragment, useState} from "react";
import Pokemon from "./componens/Pokemon/Pokemon";
import MyPokemon from './componens/MyPokemon/MyPokemon'

function App() {
    const [myPokemonDetailIsShown, setMyPokemonDetailIsShown] = useState(false);
    
    const showPokemonDetailHandler = () => {
        setMyPokemonDetailIsShown(true);
    };

    const hidePokemonDetailHandler= () => {
        setMyPokemonDetailIsShown(false);
    }



    return (
        <Fragment>
            { myPokemonDetailIsShown && <MyPokemon onClose={hidePokemonDetailHandler} />}
            <Header onShowMyPokemon = {showPokemonDetailHandler} />
            <main>
                <Pokemon />
            </main>
        </Fragment>
    );
}

export default App;