import React, {useContext, useEffect} from 'react'
import './styles/Pokeall.css'
import { BackendContext } from '../../contexts/BackendProvider'
import { Link } from 'react-router-dom'

export const Pokeall = () => {

    const {getAllPokemon, pokemon, loading, setPokeball} = useContext(BackendContext);

    useEffect(() => {
        getAllPokemon();
        setPokeball(3);
    }, [getAllPokemon]);

  return (
    <div className='pokealls'>
        <div className='pokealls-head'>
            <div className='pokealls-head-title'>
                Pokéall
            </div>
            <div className='pokealls-head-desc'>
                You can see all the Pokémons on this page
            </div>
            <div className='pokealls-head-filter'>
                {/* filter */}
            </div>
        </div>
        <div className='pokealls-mid'>
            {/* data loop and adding into card */}
            <>
            {!loading ? pokemon &&
                pokemon.map((pok, index) => (
                    <div key = {pok.name} className='pokealls-mid-card'>
                        <div className={'pokealls-mid-card-image ' + pok.types[0].type.name}>
                            <img height="200" src={pok.sprites.front_default} />
                        </div>
                        <div className='pokealls-mid-card-title'>
                            {pok.name}
                        </div>
                        <div className='pokealls-mid-card-detail'>
                            <Link className='pokealls-mid-card-detail-link' to={`/catches/${index+1}`}>catch it</Link>
                        </div>
                    </div>
                )) :
                <div className='lds-container'>
                    <div className='lds-dual-ring'></div>
                </div>
            } 
            </>
        </div>
    </div>
  )
}
