//import { example } from 
// aqui va todo lo del DOM para imprimir TODO  lo que queremos mostrar en el HTML

// aqui recorro toda la data sin filtrar ni ordenar, solo mostrar informacion e imagen 
// Importar las funciones que creamos en el data.js
// './data.js';
import data from './data/potter/potter.js';
//console.log(example,data);
// guardo la data en una variable y la llamo personajes
//const personajes = data;
//console.log(personajes)
// const personajes = data;
const mostrarPersonajes = () => {
    // realizo el recorrido con un for de la nueva variable para verificar que se guardo bien y semuestra la data
    for (let i = 0; i <= data.length; i++) {
        // console.log(data[i])
            //con los console verifico que ya se puede recorrer segun las propiedades de la data
            // console.log(personajes[i]);
            //console.log(personajes[i].name
            // console.log(personajes[i].image)
            //le doy funcionalidad al boton para mostrar los personajes en la pag
        let boton = document.getElementById("btn-personajes")
        boton.addEventListener("click", () => {
            let namePersonaje = document.getElementById("name");

            namePersonaje.innerHTML +=
                `<mein>
                <div class='imagenes'>
                <img src =${data[i].image }></div>
                <div class='name'> <h1>Nombre en la saga: ${data[i].name}</h1></div>
                <div class='name'> <h1>Tipo de patronus: ${data[i].patronus}</div>
                <div class='name'> <h1>Componente de Varita: ${data[i].wand}</div>
                <div class='name'> <h1>Nombre del actor: ${data[i].actor}</div>
                <div class='name'> <h1>Fecha de nacimiento: ${data[i].dateOfBirth}</div>
                </mein>`
        })
    }
}
mostrarPersonajes();