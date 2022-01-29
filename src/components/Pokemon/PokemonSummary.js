import React from "react";
import classes from './PokemonSummary.module.css';

const PokemonSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Pokemon</h2>
      <p>
        Catch Them All!
      </p>
      {/* <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p> */}
    </section>
  );
};

export default PokemonSummary;