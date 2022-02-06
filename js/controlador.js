import {llenarTienda,productos} from './llenarTienda.js'
import {ampliarInfoProducto} from './ampliarInfoProducto.js'
import {agregarProducto} from './agregarCarrito.js'
import {buscar} from './buscarPRoducto.js'
import {verCarrito} from './verCarrito.js'



llenarTienda()

//variables Globales
let producto={}
let carrito=[]
export let infoProducto = new bootstrap.Modal(document.getElementById('infoProducto'))
//Ampliar Informacion de producto

let row  = document.querySelector("#row")

row.addEventListener("click", e =>{
    producto = ampliarInfoProducto(e)
    cantidad.value = 1
    
})  

//Funcionalidad input cantidad
const PLUS = document.querySelector("#plus")
const MINUS = document.querySelector("#minus")
let cantidad  = document.querySelector("#cantidad")

PLUS.addEventListener('click',()=>{
    if(cantidad.value <10){
        cantidad.value ++
    }   
})

MINUS.addEventListener('click',()=>{
    if(cantidad.value > 1){ 
        cantidad.value --
    } 
})

//Barra de Busqueda
const SEARCH = document.querySelector("#search")

SEARCH.addEventListener("input", e =>{

    buscar(e,productos)
})

//agregar productos al caarrito
let agregarProductos = document.querySelector("#agregarProducto")

agregarProductos.addEventListener('click',()=>{
    let val = cantidad.value
    producto.cantidad = val

   
        carrito.push(producto)

        infoProducto.hide()
        
        agregarProducto(carrito)
})

//Carrito

let infoCarrito = document.querySelector("#infoCarrito")

infoCarrito.addEventListener('click',()=>{
    verCarrito(carrito)
})



