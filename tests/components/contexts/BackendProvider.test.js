import { render, act } from "@testing-library/react";
import { BackendProvider, BackendContext } from "../../../src/contexts/BackendProvider";
import axios from 'axios'
import React from "react";

jest.mock('axios');

describe("BackendProvider", () => {
    let providedValues;

    const renderComponent = () => {
        render(
            <BackendProvider>
                <BackendContext.Consumer>
                    {values => {
                        providedValues = values;
                        return null; // render nothing
                    }}
                </BackendContext.Consumer>
            </BackendProvider>
        );
    };

    beforeEach(() => {
        axios.get.mockClear();
    });

    it("provides correct initial values", () => {
        renderComponent();
        expect(providedValues.pokemon).toBeUndefined();
        expect(providedValues.loading).toBe(false);
        expect(providedValues.pokeball).toBe(3);
        expect(providedValues.pokemy).toBeUndefined();
    });

    it('fetches pokemon', async () => {
        axios.get.mockResolvedValue({ data: 'pokemon data' });

        renderComponent();
        await act(() => providedValues.getAllPokemon());
        expect(axios.get).toHaveBeenCalledTimes(10);

        for (let i = 1; i <= 10; i++) {
            expect(axios.get).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        expect(providedValues.pokemon).toEqual(Array(10).fill('pokemon data'));
    });

    it('handles fetch errors', async () => {
        const error = new Error('Network error');
        axios.get.mockRejectedValue(error);

        renderComponent();

        await act(() => providedValues.getAllPokemon());

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(providedValues.pokemon).toBeUndefined();
        expect(providedValues.loading).toBe(false);
    });
});