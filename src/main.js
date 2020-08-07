import { example } from
// aqui va todo lo del DOM para imprimir TODO  lo que queremos mostrar en el HTML

// aqui recorro toda la data sin filtrar ni ordenar, solo mostrar informacion e imagen 
// Importar las funciones que creamos en el data.js

'./data.js';

import data from './data/potter/potter.js';

//console.log(example,data);

const mostrarPersonajes = () => {
    // guardo la data en una variable y la llamo personajes
    const personajes = data;
    // realizo el recorrido con un for de la nueva variable para verificar que se guardo bien y semuestra la data
    for (let i = 0; i <= personajes.length; i++) {
        // con los console verifico que ya se puede recorrer segun las propiedades de la data
        //console.log(personajes[i]);
        //console.log(personajes[i].name)
        //console.log(personajes[i].image)
        // le doy funcionalidad al boton para mostrar los personajes en la pag

        let boton = document.getElementById("btn-personajes");
        boton.addEventListener("click", () => {
            let imgPersonaje = document.getElementById("img").value;
            imgPersonaje.innerHTML = 'Hola Bienvenido, elige un personaje:' + personajes[i].image;
        })
    }
}