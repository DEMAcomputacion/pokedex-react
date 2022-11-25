import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('Layout', () => {
    beforeEach(()=>{
        render(<Layout />)
    });

    it("Prueba que se renderize el logo", () => {
        expect(screen.getByAltText('logo')).toBeInTheDocument;
    })

    it("prueba que se renderize el buscador", () => {
        expect(screen.getByPlaceholderText('Escriba para buscar...')).toBeInTheDocument;
    })
})