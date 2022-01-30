import React, { Fragment } from "react";
import DataPokemon from "./DataPokemon";
import PokemonSummary from "./PokemonSummary";
// import ApolloClient from "apollo-boost";
// import { ApolloClient } from '@apollo/client';
// import { ApolloProvider } from "@apollo/react-hooks";
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';

const Pokemon = () => {

    // const cache = new InMemoryCache();
    // const link = new HttpLink({
    //     uri: 'https://graphqlpokemon.favware.tech/'
    // });

    // const client = new ApolloClient({
    //     // Provide required constructor fields
    //     cache: cache,
    //     link: link,
      
    //     // Provide some optional constructor fields
    //     name: 'graphql-pokemon-client',
    //     version: '1.0',
    //     queryDeduplication: false,
    //     defaultOptions: {
    //       watchQuery: {
    //         fetchPolicy: 'cache-and-network'
    //       }
    //     }
    //   });
    // const client = new ApolloClient({
    //     // uri: 'http://graphql-pokeapi.graphcdn.app/allow-cors',
    //     // uri:"https://directions-graphql.herokuapp.com/graphql",
    //     uri: 'https://graphqlpokemon.favware.tech/',
    //     mode: "no-cors",
    //     "Access-Control-Allow-Origin": "*",
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     "Access-Control-Allow-Credentials": true,
    //     // 'Authorization': accessToken,
    // });

    return <Fragment>
        <PokemonSummary />
        {/* <ApolloProvider client={client}> */}
           
            <DataPokemon/>

        {/* </ApolloProvider> */}
    </Fragment>

}

export default Pokemon;