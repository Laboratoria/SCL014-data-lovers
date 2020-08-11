import { mostrarPersonajes } from '../src/data.js';


describe('mostrarPersonajes', () => {
    // esta me deberia decirme que tipo de dato es mostrarPersonajes
    test('should is a function', () => {
        expect(typeof mostrarPersonajes).toBe('function');
    });
    //should yo espero que retornr los names e imagenes de los personajes
    test('shoul return `personajes[i].name`', () => {
        expect(mostrarPersonajes(personajes[i].name, personajes[i].image)).toBe('function');

    });
});

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });