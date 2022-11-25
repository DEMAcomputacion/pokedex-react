import { render, screen } from '@testing-library/react';
import { useFetchListado } from '../../../hooks/useFetch';
import PanelNombres from '../PanelNombres';

const stateNormal = {
    loading: false,
    error: null,
    data: {
        results: [{
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/"
        }]
    }
}

const stateLoading = {
    loading: true,
    error: null,
    data: null
}

jest.mock('../../../hooks/useFetch');

describe("Prueba que se renderize panel de nombres", () => {
    test("prueba que se renderize panel de nombres", async () => {
        useFetchListado.mockImplementation(() => { return stateNormal });
        render(<PanelNombres />)
        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
        expect(screen.getByText('1')).toBeInTheDocument()
    })
    test("prueba que se NO renderize panel de nombres con state Loading", async () => {
        useFetchListado.mockImplementation(() => { return stateLoading });
        render(<PanelNombres />)
        expect(screen.queryByText(/bulbasaur/i)).not.toBeInTheDocument()
        expect(screen.queryByText('1')).not.toBeInTheDocument()
    })
})


