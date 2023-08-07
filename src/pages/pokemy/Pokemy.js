import React, { useEffect, useContext } from 'react'
import './styles/Pokemy.css'
import { BackendContext } from '../../contexts/BackendProvider';

export const Pokemy = () => {

    const {setPokeball, loading, setLoading, pokemy} = useContext(BackendContext);

    useEffect(() => {
        setPokeball(3);
    })

    return (
        <div className='pokemys'>
            <div className='pokemys-head'>
                <div   div className='pokemys-head-title'>
                    Pokémy
                </div>
                <div className='pokemys-head-desc'>
                    You can see all the Pokémons what you catch
                </div>
            </div>
            <div className='pokemys-mid'>
                {/* data loop and adding into card */}
                <>
                {pokemy &&
                    pokemy.map((pok, index) => (
                        <div key = {pok.name} className='pokemys-mid-card'>
                            <div className={'pokemys-mid-card-image ' + pok.color}>
                                <img height="200" src={pok.img} />
                            </div>
                            <div className='pokemys-mid-card-title'>
                                {pok.name}
                            </div>
                        </div>
                    ))
                } 
                </>
            </div>
        </div>
    )
}
