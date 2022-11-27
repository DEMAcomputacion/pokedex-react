import react from "react";
import { render, screen } from "@testing-library/react";
import ModalPokemon from "../Modal";
import { useFetchPokemon } from "../../../hooks/useFetch";
import MostrarPokemon from "../../MostrarPokemon/MostrarPokemon";

const stateNormal = {
  loading: false,
  error: null,
  data: {},
};

jest.mock("../../../hooks/useFetch");
jest.mock("../../MostrarPokemon/MostrarPokemon");

describe("Prueba funcionalidad Modal", () => {
  beforeEach(() => {
    useFetchPokemon.mockImplementation(() => { return stateNormal });
    MostrarPokemon.mockImplementation(() => { return "El componente fue renderizado" });
  });

  test("Prueba que se renderize el Modal con la prop trigger", () => {
    render(<ModalPokemon trigger />);
    expect(
      screen.getByText(/El componente fue renderizado/i)).toBeInTheDocument();
  });

  test("Prueba que NO se renderize el modal SIN la prop trigger", () => {
    render(<ModalPokemon />);
    expect(
      screen.queryByText(/El componente fue renderizado/i)).not.toBeInTheDocument();
  });
});
