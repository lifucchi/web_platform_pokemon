import React, { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem/PokemonItem";
import classes from './DataPokemon.module.css';
import regeneratorRuntime from "regenerator-runtime";
// import { useQuery } from "@apollo/react-hooks";
// import { GET_POKEMONS } from "../graphql/getPokemon";

const DataPokemon = (props) => {
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

    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    const pokemonList =
    <ul >
        {
            allPokemons.map((pokemonStats, index) => (
                <PokemonItem
                key={ generateKey(pokemonStats.id) }
                pokemon={pokemonStats}
                id={pokemonStats.id}
                name={pokemonStats.name}
                type={pokemonStats.types[0].type.name}
            />
            ))
        }
    </ul>

    return (<section className={classes.meals}>
        <ul>
            {pokemonList}
        </ul>
    </section>);

};

export default DataPokemon;