import React, { useEffect, useState, useCallback, useContext } from 'react'
import './styles/Catches.css'
import { useParams, useNavigate } from 'react-router-dom'
import { BackendContext } from '../../contexts/BackendProvider'
import axios from 'axios'
export const Catches = () => {
    const [pokemon, setPokemon] = useState();
    const { id } = useParams();
    const {pokeball, setPokeball, loading, setLoading, setPokemy, pokemy = []} = useContext(BackendContext);
    const [catchIt, setCatchIt] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        setCatchIt("");
        handleSearch();
    }, [id])

    const handleCatch = () => {
        setLoading(true);
        setTimeout(() => {
            const randomNumber = Math.random();
            const isTrue = randomNumber < 0.5;
            let tempMyPokemon = [...pokemy];

            let count = pokeball - 1;
            if(isTrue) {
                setCatchIt("You catch it, now it will redirect to Pokemy page in 3 seconds.");
                setPokeball(count);
                tempMyPokemon.push({name: pokemon.name, img: pokemon.sprites.front_default, color: pokemon.types[0].type.name})
                setPokemy([...tempMyPokemon]);
                setTimeout(() => {
                    navigate('/pokemy')
                }, 3000)
            }else {
                setPokeball(count);
                if(count <= 0) {
                    setCatchIt("Sorry, your pokeball is now 0. Now it will redirect you to pokeall page in 3 seconds.");
                    setTimeout(() => {
                        navigate('/pokeall')
                    }, 3000)
                }else{
                    setCatchIt("Sorry, you fail catch that. Try again!!!");
                }
            }
            setLoading(false);
        }, 3000)
    }

    const handleSearch = useCallback(async () => {
        let url = "https://pokeapi.co/api/v2/pokemon/" + id;
        const response = await axios.get(url);
        setPokemon(response.data);
    }, [id]);

    return (
        <>
        {pokemon &&
            <div className='catches'>
                <div className='catches-head'>
                    <div className='catches-head-title'>
                        Catch the Pokémon
                    </div>
                    <div className='catches-head-desc'>
                        Pokéball available : {pokeball}
                    </div>
                    <div className='catches-head-warn'>
                        {catchIt ? catchIt : ""}
                    </div>
                </div>
                <div className='catches-mid'>
                    <div className='catches-mid-card'>
                        <div className={'catches-mid-card-image ' + pokemon.types[0].type.name}>
                            <img height="200" src={pokemon.sprites.front_default} alt='image pokemon'/>
                        </div>
                        <div className='catches-mid-card-title'>
                            {pokemon.name}
                        </div>
                        {   
                            pokeball > 0 && (catchIt === "" || catchIt === "Sorry, you fail catch that. Try again!!!" ) ?
                                !loading ? 
                                    <div className='catches-mid-card-catch'>
                                        <button onClick={handleCatch} className='catches-mid-card-catch-button'>Catch</button>
                                    </div> 
                                :
                                    <div className='lds-container'>
                                        <div className='lds-dual-ring'></div>
                                    </div>
                            :
                            pokeball >= 0 && catchIt === "You catch it, now it will redirect to Pokemy page in 3 seconds." ?
                                <div className='catches-mid-card-desc'>{catchIt}</div>
                            :
                            <div className='catches-mid-card-desc'>{catchIt}</div>
                        }
                    </div>
                </div>
            </div>
        } 
        
        </>
    )
}