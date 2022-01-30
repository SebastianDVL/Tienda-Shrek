import {llenarTienda,productos} from './llenarTienda.js'
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

const PLUS = document.querySelector("#plus")
const MINUS = document.querySelector("#minus")
const CANTIDAD  = document.querySelector("#cantidad")

let val 

PLUS.addEventListener('click',()=>{
    val = CANTIDAD.value
    if(CANTIDAD.value <10){
        CANTIDAD.value ++
    }   
})

MINUS.addEventListener('click',()=>{
    val = CANTIDAD.value
   
    if(CANTIDAD.value > 1){ 
        CANTIDAD.value --
    }
 
})

const SEARCH = document.querySelector("#search")

SEARCH.addEventListener("input", e =>{
    let value = e.target.value.toLowerCase()
    productos.forEach((producto,index)=>{
        let isVisible = producto.name.toLowerCase().includes(value)
        cards[index].classList.toggle("hide",!isVisible)
    })
})