import {screen, render } from '@testing-library/react'
import Buscador from '../Buscador'
import useSearch from '../../../hooks/useSearch'

jest.mock('../../../hooks/useSearch')
const filteredData = [{
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
        name: "electrode",
        url: "https://pokeapi.co/api/v2/pokemon/101/"
    },
]

beforeEach(()=>{
    useSearch.mockImplementation(()=> {return filteredData});
})

describe('prueba el componente Buscador', ()=> {
    test('prueba que se renderize el campo de busqueda', () => {
        render(<Buscador />)
        expect(screen.getByPlaceholderText('Escriba para buscar...')).toBeInTheDocument()
    })
    test('prueba que el componente renderize el resultado de una busqueda', () => {
        render(<Buscador />)
        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
        expect(screen.getByText(/electrode/i)).toBeInTheDocument()
    })
})