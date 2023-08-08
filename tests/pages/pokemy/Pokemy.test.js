import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pokemy } from '../../../src/pages/pokemy/Pokemy';
import { BackendContext } from '../../../src/contexts/BackendProvider';

describe('<Pokemy />', () => {
  it('renders correctly', () => {
    const mockContext = {
      pokemy: [
        { name: 'bulbasaur', img: 'some_url', color: 'grass' },
        { name: 'charmander', img: 'some_url', color: 'fire' }
      ],
      setPokeball: jest.fn(),
    };

    render(
      <BackendContext.Provider value={mockContext}>
        <Pokemy />
      </BackendContext.Provider>
    );

    expect(screen.getByText('Pokémy')).toBeInTheDocument();
    expect(screen.getByText('You can see all the Pokémons what you catch')).toBeInTheDocument();

    // Check if the pokemons are rendered
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('charmander')).toBeInTheDocument();
  });

  it('calls setPokeball on render', () => {
    const setPokeball = jest.fn();
    const mockContext = {
      pokemy: [],
      setPokeball
    };

    render(
      <BackendContext.Provider value={mockContext}>
        <Pokemy />
      </BackendContext.Provider>
    );

    expect(setPokeball).toHaveBeenCalledWith(3);
  });
});