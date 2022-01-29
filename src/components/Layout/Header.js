import React, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderPokemonButton from "./HeaderPokemonButton";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            {/* <h1>Pokemon</h1> */}
            <HeaderPokemonButton onClick= {props.onShowMyPokemon} />
        </header>
        <div className={classes['main-image']}>
            <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/01/Pokemon-legendaries-starters-and-more.jpg?q=50&fit=contain&w=960&h=500&dpr=1.5" />
        </div>

    </Fragment>
};

export default Header;