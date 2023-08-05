import React from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div className='headers'>
        <Link className='headers-left' to="/">Pokémon</Link>
        <div className='headers-right'>
            <Link className='headers-right-link' to="/pokeall">Pokeall</Link>
            <Link className='headers-right-link' to="/pokedex">Pokedex</Link>
            <Link className='headers-right-link' to="/pokeabout">Pokeabout</Link>
        </div>
    </div>
  )
}
