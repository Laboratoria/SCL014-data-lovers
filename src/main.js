//import { casaG, casaS, casaH, casaR } from

// aqui va todo lo del DOM para imprimir TODO  lo que queremos mostrar en el HTML
// aqui recorro toda la data sin filtrar ni ordenar, solo mostrar informacion e imagen 
// // Importar las funciones que creamos en el data.js
// './data.js';
import data from './data/potter/potter.js'

//FUNCION PARA MOSTRAR DATA
const mostrarPersonajes = () => {
    // realizo el recorrido con un for de la nueva variable para verificar que se guardo bien y semuestra la data
    for (let i = 0; i <= data.length; i++) {
        let boton = document.getElementById("btn-personajes")
        boton.addEventListener("click", () => {
            let namePersonaje = document.getElementById("name");
            namePersonaje.innerHTML +=
                `<section>
                <div class='imagenes'>
                <img src = ${data[i].image }></div>
                <div class='name'> <h1>Nombre en la saga: ${data[i].name}</h1></div>
                <div class='name'> <h1>Tipo de patronus: ${data[i].patronus}</div>
                <div class='name'> <h1>Componente de Varita: ${data[i].wand}</div>
                <div class='name'> <h1>Nombre del actor: ${data[i].actor}</div>
                <div class='name'> <h1>Fecha de nacimiento: ${data[i].dateOfBirth}</div>
                </section>`
        })
    }
}
mostrarPersonajes();

const OrdenarData = () => {
        for (let i = 0; i <= data.length; i++) {
            let ordenarNombres = data[i].name;
            ordenarNombres.sort(function(a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        console.log(ordenarNombres)
                    }


                    // document.getElementById('dataOrdenada').innerHTML = `
                    //  < div class = "ordenar" >
                    // < p > DataOrdenada < /p> <
                    // input type = "button"
                    // id = "ordenar_name"
                    // value = "Alfabetico A-Z" > < br > < br >
                    // <
                    ///div> `


                    // // DECLARO VARIABLES PARA LAS PAGINAS Y LE DOY EVENTOS 

                    // let pag2 = document.getElementById("pag2")
                    // let pag3 = document.getElementById("pag3")
                    // let pag4 = document.getElementById("pag4")
                    // let pag5 = document.getElementById("pag5")
                    // let pag6 = document.getElementById("pag6")