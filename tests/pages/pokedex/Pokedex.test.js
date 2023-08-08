import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import { Pokedex } from '../../../src/pages/pokedex/Pokedex';

jest.mock('axios');

describe('Pokedex', () => {
  it('renders correctly', () => {
    render(<Pokedex />);
    expect(screen.getByText('Pokédex')).toBeInTheDocument();
    expect(screen.getByText('You can see all detail from the Pokémon you want')).toBeInTheDocument();
  });

  it('handles input change and button click', async () => {
    const pokemonData = {
      data: {
        sprites: { front_default: "front_default_image_url" },
        name: "bulbasaur",
        types: [{ type: { name: "grass" } }, { type: { name: "poison" } }]
      }
    };

    axios.get.mockResolvedValueOnce(pokemonData);
  
    render(<Pokedex />);
  
    const input = screen.getByPlaceholderText('search name Pokémon with correct name');
    fireEvent.change(input, { target: { value: 'bulbasaur' } });

    const button = screen.getByText('Search');
    fireEvent.click(button);
  
    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    
    const nameElement = await screen.findByText('bulbasaur');
    expect(nameElement).toBeInTheDocument();

    const typeElement = await screen.findByText('grass');
    expect(typeElement).toBeInTheDocument();
  });
});