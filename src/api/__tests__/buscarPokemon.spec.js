/** * @jest-environment jsdom */
/// <reference types="Jest"/>
import buscarPokemon from "../buscarPokemon.js";

const pokemon = {};

beforeEach(() => {
  global.fetch = jest.fn();
});
test("Llama al listado de pokemones", () => {
  global.fetch.mockResolvedValue({
    ok: true,
    json: () => pokemon,
  });

  buscarPokemon(2);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`https://pokeapi.co/api/v2/pokemon/2`);
});

afterEach(() => {
  jest.resetAllMocks();
});
