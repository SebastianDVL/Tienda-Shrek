import {llenarTienda,productos} from './llenarTienda.js'
import {ampliarInfoProducto} from './ampliarInfoProducto.js'
import {agregarProducto} from './agregarCarrito.js'


llenarTienda()

//variables Globales
let producto={}
let carrito=[]

//Ampliar Informacion de producto
let infoProducto = new bootstrap.Modal(document.getElementById('infoProducto'))

let row  = document.querySelector("#row")

row.addEventListener("click", e =>{
    producto = ampliarInfoProducto(productos)
    infoProducto.show()
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
    let value = e.target.value.toLowerCase()
    productos.forEach((producto,index)=>{
        let isVisible = producto.name.toLowerCase().includes(value)
        cards[index].classList.toggle("hide",!isVisible)
    })
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