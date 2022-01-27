import {llenarTienda} from './llenarTienda.js'
import {ampliarInfoProducto} from './ampliarInfoProducto.js'


llenarTienda()

let listaProductos = document.querySelector('.row')

export let infoProducto = new bootstrap.Modal(document.getElementById('infoProducto'))

listaProductos.addEventListener('click',(event)=>{

    let classNames =["card","card-body"]
    if(classNames.some(className => event.target.parentNode.classList.contains(className))){
        ampliarInfoProducto(event)
    }
})

