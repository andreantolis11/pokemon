import React, { useEffect, useState } from 'react'
import './styles/Pokedex.css'
import axios from 'axios';
export const Pokedex = () => {

    const [pokedex, setPokedex] = useState();
    const [input, setInput] = useState("");

    const handleSearchClick = async () => {
        let url = "https://pokeapi.co/api/v2/pokemon/" + input.toLowerCase();
        const response = await axios.get(url);
        setPokedex(response.data);
    }

  return (
    <div className='pokedexs'>
        <div className='pokedexs-head'>
            <div className='pokedexs-head-title'>
                Pokédex
            </div>
            <div className='pokedexs-head-desc'>
                You can see all detail from the Pokémon you want
            </div>
        </div>
        <div className='pokedexs-mid'>
            <input value={input} onChange={(e) => setInput(e.target.value)} className='pokedexs-mid-input' type='text' placeholder='search name Pokémon with correct name' />
            <button onClick={handleSearchClick} className='pokedex-mid-button'>Search</button>
        </div>
        <>
        {
            pokedex && 
                <div className='pokedexs-bot'>
                    <div className='pokedexs-bot-card'>
                        <div className='pokedex-bot-card-image'>
                            <img className='pokedex-bot-card-image-img' height={150} src={pokedex.sprites.front_default} />
                        </div>
                        <div className='pokedex-bot-card-text'>
                            <div className='pokedex-bot-card-text-info'>
                                POKEDEX INFO
                            </div>
                            <div className='pokedex-bot-card-text-parent'>
                                <div className='pokedex-bot-card-text-title'>
                                    Name
                                </div>
                                <div className='pokedex-bot-card-text-desc'>
                                    {pokedex.name}
                                </div>
                            </div>
                            <div className='pokedex-bot-card-text-parent'>
                                <div className='pokedex-bot-card-text-title'>
                                    Type
                                </div>
                                <div className='pokedex-bot-card-text-type'>
                                    {
                                        pokedex && pokedex.types.map(pok => (
                                            <div className={'pokedex-bot-card-text-desc-type ' + pok.type.name}>
                                                {pok.type.name}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
        </>
    </div>
  )
}
