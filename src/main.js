import { casaGryffindor } from
// aqui va todo lo del DOM para imprimir TODO  lo que queremos mostrar en el HTML
// aqui recorro toda la data sin filtrar ni ordenar, solo mostrar informacion e imagen 
// Importar las funciones que creamos en el data.js
'./data.js';
import data from './data/potter/potter.js';
//console.log(example,data);
// guardo la data en una variable y la llamo personajes
//const personajes = data;
//console.log(personajes)
const mostrarPersonajes = () => {
    // realizo el recorrido con un for de la nueva variable para verificar que se guardo bien y semuestra la data
    for (let i = 0; i <= data.length; i++) {
        //console.log(personajes[i])
        //con los console verifico que ya se puede recorrer segun las propiedades de la data
        // console.log(personajes[i]);
        //console.log(personajes[i].name
        // console.log(personajes[i].image)
        //le doy funcionalidad al boton para mostrar los personajes en la pag
        let boton = document.getElementById("btn-personajes")
        boton.addEventListener("click", () => {
            let datosPersonajes = document.getElementById("name");

            datosPersonajes.innerHTML +=
                `<div class='imagenes'>
                <img src = ${data[i].image}></div>
                <div class='name'> <h1>${data[i].name}</h1></div>
                <div class='dateOfBirth'><h1>${data[i].dateOfBirth}</h1></div>
                <div class= 'patronus'><h1>${data[i].patronus}</h1></div>
                <div> hola </div>`
        })
    }
}
mostrarPersonajes();

let boton2 = document.getElementById("btn-filtro1")
boton2.addEventListener("click", casaGryffindor);
console.log(casaGryffindor);