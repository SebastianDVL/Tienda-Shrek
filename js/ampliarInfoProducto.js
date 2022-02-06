import { infoProducto } from "./controlador.js"
import {productos} from './llenarTienda.js'
export function ampliarInfoProducto (event){ 

    let producto = {}
    let imgInfo = document.querySelector("#imgInfo")
    let title = document.querySelector("#title")
    let price = document.querySelector("#price")
    let text = document.querySelector("#text")
    let cards = document.querySelectorAll(".card")
    let n 
    for (let i = 0; i <= cards.length; i++) {
        const element = cards[i]
       if(event.target.parentNode == element  || event.target.parentNode.parentNode == element){
            n = i
       }    
    }
    let d = productos[n].desc
    if(event.target.parentNode.classList.contains("card")){
        
        producto={
            img:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector(".fw-normal").textContent,
            desc:d,
            cantidad:document.querySelector("#cantidad").value
        }
        

        imgInfo.src = producto.img
        title.textContent = producto.nombre
        price.textContent = producto.precio
        text.textContent = producto.desc
        
        infoProducto.show()
        return producto
    }
    if(event.target.parentNode.classList.contains("card-body")){
        
        producto={
            img:event.target.parentElement.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector(".fw-normal").textContent,
            desc:d,
            cantidad:document.querySelector("#cantidad").value
        }
       
        imgInfo.src = producto.img
        title.textContent = producto.nombre
        price.textContent = producto.precio
        text.textContent = producto.desc
        
        
        infoProducto.show()
        return producto
    }  
    
}