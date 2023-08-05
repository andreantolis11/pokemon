import React from 'react'
import './styles/Home.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='homes'>
        <div className='homes-top'>
            <div className='homes-top-title'>Pokémon</div>
            <div className='homes-top-desc'>See the detail of all Pokémons and catch them all</div>
        </div>
        <div className='homes-mid'>
            <Link className='homes-mid-button-link' to="/pokeall"><button className='homes-mid-button'>START</button></Link>
        </div>
        <div className='homes-bot'>
            <div className='homes-bot-title'>powered by</div>
            <div className='homes-bot-desc'>Andre Antolis</div>
        </div>
    </div>
  )
}
