import React from "react";
import classes from './PokemonSummary.module.css';

const PokemonSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Pokemon</h2>
      <p>
        Gotta Catch 'Em All
      </p>
    </section>
  );
};

export default PokemonSummary;