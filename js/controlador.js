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
    producto = ampliarInfoProducto(productos,e)
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

cantidad.addEventListener("input", e =>{
    let value = e.target.value
    if(value >10 || value < 1){
        cantidad.classList.add("border-danger")
    }else{
        cantidad.classList.remove("border-danger")
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

    if(val< 1 || val >10){
        alert("Cantidad Invalida")
    }else{
        carrito.push(producto)

        infoProducto.hide()
        
        agregarProducto(carrito)
  
    }
})

//Carrito

let infoCarrito = document.querySelector("#infoCarrito")

infoCarrito.addEventListener('click',()=>{
    verCarrito(carrito)
})



