import { mostrarPersonajes } from '../src/data.js';


describe('mostrarPersonajes', () => {
    // esta me deberia traer los names e imagenes de los personajes
    test('should is a function', () => {
        expect(typeof mostrarPersonajes).toBe('function');
    });
    //should yo espero que retornr
    test('shoul return `personajes[i].name`', () => {
        expect(mostrarPersonajes(personajes[i].name)).toBe('function');

    });
});


// describe('anotherExample', () => {
//     it('is a function', () => {
//         expect(typeof mostrarPersonajes).toBe('function');
//     });

//     it('returns `anotherExample`', () => {
//         expect(anotherExample()).toBe('OMG');
//     });
// });