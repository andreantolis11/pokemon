import React, { createContext, useState, useCallback } from 'react'
import axios from 'axios';
export const BackendContext = createContext();

export const BackendProvider = ({children}) => {

  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [pokeball, setPokeball] = useState(3);
  const [pokemy, setPokemy] = useState();

  //to get all data pokemon
  const getAllPokemon = useCallback(async () => {
    setLoading(true);
    let pokemonArray = [];
    const size = 10;
    try {
      for(let i = 1; i <= size; i++){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        pokemonArray.push(response.data);
      }
      setPokemon([...pokemonArray]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <BackendContext.Provider 
      value={{
          getAllPokemon,
          pokemon,
          setLoading,
          loading,
          setPokeball,
          pokeball,
          pokemy,
          setPokemy
      }}>
      {children}
    </BackendContext.Provider>
  )
}

