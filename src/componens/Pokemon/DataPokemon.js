import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import PokemonItem from "./PokemonItem/PokemonItem";
import classes from './DataPokemon.module.css';
import regeneratorRuntime from "regenerator-runtime";
// import { useQuery } from "@apollo/react-hooks";
// import { GET_POKEMONS } from "../graphql/getPokemon";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];


const DataPokemon = () => {
    // const { data: { pokemons } = [] = {} } = useQuery(
    //     GET_POKEMONS, {
    //     variables: {
    //         limit: 2,
    //         offset: 1
    //       }
    // }
    // )

    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllPokemons(currentList => [...currentList, data])
                await allPokemons.sort((a, b) => a.id - b.id)
            })
        }
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    // const mealList = DUMMY_MEALS.map(meal => <PokemonItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
    const pokemonList = allPokemons.map((pokemonStats, index) =>
        <PokemonItem
            key={pokemonStats.id}
            id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
            type={pokemonStats.types[0].type.name}
        />)

    return (<section className={classes.meals}>
        {/* <Card> */}
            <ul>
                {pokemonList}
            </ul>
        {/* </Card> */}

    </section>);

};

export default DataPokemon;