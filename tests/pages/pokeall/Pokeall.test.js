import React from 'react';
import { render, screen } from '@testing-library/react';
import { BackendContext } from '../../../src/contexts/BackendProvider'
import { Pokeall } from '../../../src/pages/pokeall/Pokeall';

jest.mock("react-router-dom", () => ({
    Link: "a"
}));

describe('Pokeall', () => {
  const mockGetAllPokemon = jest.fn();
  const mockSetPokeball = jest.fn();

  it('renders correctly', () => {
    render(
      <BackendContext.Provider value={{
          getAllPokemon: mockGetAllPokemon,
          pokemon: [],
          loading: false,
          setPokeball: mockSetPokeball
        }}>
        <Pokeall />
      </BackendContext.Provider>
    );

    expect(screen.getByText('Pokéall')).toBeInTheDocument();
    expect(screen.getByText('You can see all the Pokémons on this page')).toBeInTheDocument();
  });

  it('calls getAllPokemon on mount', () => {
    render(
      <BackendContext.Provider value={{
          getAllPokemon: mockGetAllPokemon,
          pokemon: [],
          loading: false,
          setPokeball: mockSetPokeball
        }}>
        <Pokeall />
      </BackendContext.Provider>
    );

    expect(mockGetAllPokemon).toHaveBeenCalled();
    expect(mockSetPokeball).toHaveBeenCalledWith(3);
  });
});