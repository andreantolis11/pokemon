import React from 'react';
import { render } from '@testing-library/react';
import { Pokeabout } from '../../../src/pages/pokeabout/Pokeabout';

describe('<Pokeabout />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Pokeabout />);

    expect(getByText('Pokéabout')).toBeInTheDocument();
    expect(getByText('This website just want to show all detail from Pokémons, and you can catch all Pokémon you want. Enjoy it.')).toBeInTheDocument();
  });
});