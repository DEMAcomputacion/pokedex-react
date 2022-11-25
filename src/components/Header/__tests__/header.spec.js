import {screen, render } from '@testing-library/react'
import Header from '../Header'

test("Prueba que se renderize la imagen del logo", ()=> {
    render(<Header />)
    expect(screen.getByAltText('logo')).toBeInTheDocument()
})