import react from 'react'
import { render, screen } from '@testing-library/react';
import MostrarPokemon from '../MostrarPokemon';
import { useFetchPokemon } from '../../../hooks/useFetch';
import { pokemonFixture } from './fixtures/pokemon.js';
import Loading from '../../Loading/Loading';

const stateNormal = {loading: false, error: null, data: pokemonFixture}
const stateLoading = {loading: true, error: null, data: null}
const stateError = {loading: false, error: {error: "Hubo un problema"}, data: null}

jest.mock('../../../hooks/useFetch');
jest.mock('../../Loading/Loading')

describe('Prueba funcionalidad con datos', () => {
    test('Prueba que se renderize el modal con los datos del fixture', () => {
        useFetchPokemon.mockImplementation(() => { return stateNormal });
        render(<MostrarPokemon />)
        expect(screen.getByText(/Snover/i)).toBeInTheDocument()
        expect(screen.getByText(/Height/i)).toBeInTheDocument()
        expect(screen.getByText(/10/i)).toBeInTheDocument()
        expect(screen.getByText(/Weight/i)).toBeInTheDocument()
        expect(screen.getByText(/505/i)).toBeInTheDocument()
        expect(screen.getByText(/Abilities/i)).toBeInTheDocument()
        expect(screen.getByText(/snow-warning/i)).toBeInTheDocument()
        expect(screen.getByText(/soundproof/i)).toBeInTheDocument()
        expect(screen.queryByRole('img')).toBeInTheDocument()
    })
})

describe('Prueba el estado Loading', () => {
    test('Prueba que se renderize el componente Loading al pasar un estado loading', () => {
        useFetchPokemon.mockImplementation(() => { return stateLoading });
        Loading.mockImplementation(() => { return "Loading" })
        render(<MostrarPokemon />)
        expect(screen.getByText(/loading/i)).toBeInTheDocument()
    })
})

describe('Prueba el estado Error', () => {
    test('Prueba que se renderize el componente Loading al pasar un estado loading', () => {
        useFetchPokemon.mockImplementation(() => { return stateError });
        render(<MostrarPokemon />)
        expect(screen.getByText(/Algo salió mal/i)).toBeInTheDocument()
    })
})
