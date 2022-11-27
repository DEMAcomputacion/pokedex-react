import React from 'react'
import {screen, render } from '@testing-library/react'
import Resultados from '../Resultados'

const filteredData = [{
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
        name: "electrode",
        url: "https://pokeapi.co/api/v2/pokemon/101/"
    },
]

describe('prueba el componente Buscador', ()=> {
    test('prueba que se renderize el campo de busqueda', () => {
        render(<Resultados filteredData={filteredData}/>)
        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
        expect(screen.getByText(/electrode/i)).toBeInTheDocument()
    })
})