/** * @jest-environment jsdom */
/// <reference types="Jest"/>
import urlToId from '../urlToId.js'

const url_1 = "https://pokeapi.co/api/v2/pokemon/2/"
const url_2 = "https://pokeapi.co/api/v2/pokemon/101/"

describe('prueba la funcion capitalize', () => {
    test("que la funcion devuelva el valor adecuado", () => {
        expect(urlToId(url_1)).toEqual("2")
        expect(urlToId(url_2)).toEqual("101")
    })
})