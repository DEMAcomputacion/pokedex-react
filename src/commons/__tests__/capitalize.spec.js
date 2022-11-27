/** * @jest-environment jsdom */
/// <reference types="Jest"/>
import capitalize from "../capitalize.js";

describe("prueba la funcion capitalize", () => {
  test("que la funcion devuelva el valor adecuado", () => {
    expect(capitalize("casa")).toEqual("Casa");
    expect(capitalize("casa grande")).toEqual("Casa Grande");
  });
});
