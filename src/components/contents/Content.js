import React from 'react'
import './styles/Content.css'
import {Routes, Route} from 'react-router-dom';

import { Home } from '../../pages/homes/Home';
import { Pokeall } from '../../pages/pokeall/Pokeall';
import { Pokedex } from '../../pages/pokedex/Pokedex';
import { Pokeabout } from '../../pages/pokeabout/Pokeabout';

export const Content = () => {
  return (
    <div className='contents'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pokeall" element={<Pokeall />}/>
            <Route path="/pokedex" element={<Pokedex />}/>
            <Route path="/pokeabout" element={<Pokeabout />}/>
        </Routes>
    </div>
  )
}
