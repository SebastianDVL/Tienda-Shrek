import {llenarTienda} from './llenarTienda.js'
import {ampliarInfoProducto} from './ampliarInfoProducto.js'


llenarTienda()

export let infoProducto = new bootstrap.Modal(document.getElementById('infoProducto'))

let cards = document.querySelectorAll(".card")

export let element

cards.forEach((card,index) => {
    card.addEventListener('click',()=>{
        element  = index
        ampliarInfoProducto()
    })
})