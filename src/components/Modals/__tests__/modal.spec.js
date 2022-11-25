import react from 'react'
import { render, screen } from '@testing-library/react';
import ModalPokemon from '../Modal';
import { useFetchPokemon } from '../../../hooks/useFetch';
import { pokemonFixture } from './fixtures/pokemon.js';

const stateNormal = {
    loading: false,
    error: null,
    data: pokemonFixture
}

jest.mock('../../../hooks/useFetch');

describe('Prueba funcionalidad Modal', () => {
    test('Prueba que se renderize el Modal con la prop trigger', () => {
        useFetchPokemon.mockImplementation(() => { return stateNormal });
        render(<ModalPokemon trigger />)
        expect(screen.getByText(/Snover/i)).toBeInTheDocument()
        expect(screen.getByText(/Height/i)).toBeInTheDocument()
        expect(screen.getByText(/10/i)).toBeInTheDocument()
        expect(screen.getByText(/Weight/i)).toBeInTheDocument()
        expect(screen.getByText(/505/i)).toBeInTheDocument()
        expect(screen.getByText(/Abilities/i)).toBeInTheDocument()
        expect(screen.getByText(/snow-warning/i)).toBeInTheDocument()
        expect(screen.getByText(/soundproof/i)).toBeInTheDocument()
    })
    test('Prueba que NO se renderize el modal SIN la prop trigger', () => {
        useFetchPokemon.mockImplementation(() => { return stateNormal });
        render(<ModalPokemon />)
        expect(screen.queryByText(/Snover/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/Height/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/10/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/Weight/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/505/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/Abilities/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/snow-warning/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/soundproof/i)).not.toBeInTheDocument()
    })
})
