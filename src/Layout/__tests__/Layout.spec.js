import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

test("Prueba que se renderizen los componentes del layout", () => {
    const { container } = render(<Layout />);
    const header = container.getElementsByClassName('header-class');
    expect(header.length).toBe(1)
    const panelIzquierdo = container.getElementsByClassName('panel-izquierdo');
    expect(panelIzquierdo.length).toBe(1)
    const panelDerecho = container.getElementsByClassName('panel-derecho');
    expect(panelDerecho.length).toBe(1)
})