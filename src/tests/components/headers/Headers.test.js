import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../../components/headers/Header';

describe("Header", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it("renders correct links", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText("Pokémon")).toBeInTheDocument();
    expect(screen.getByText("Pokeall")).toBeInTheDocument();
    expect(screen.getByText("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("Pokeabout")).toBeInTheDocument();
    expect(screen.getByText("Pokemy")).toBeInTheDocument();
  });

  it("links have correct hrefs", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText("Pokémon").closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText("Pokeall").closest('a')).toHaveAttribute('href', '/pokeall');
    expect(screen.getByText("Pokedex").closest('a')).toHaveAttribute('href', '/pokedex');
    expect(screen.getByText("Pokeabout").closest('a')).toHaveAttribute('href', '/pokeabout');
    expect(screen.getByText("Pokemy").closest('a')).toHaveAttribute('href', '/pokemy');
  });
});