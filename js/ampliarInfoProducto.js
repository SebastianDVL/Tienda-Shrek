import { infoProducto } from "./controlador.js"
export function ampliarInfoProducto (productos,event){ 

    let producto = {}
    let imgInfo = document.querySelector("#imgInfo")
    let title = document.querySelector("#title")
    let price = document.querySelector("#price")
    let text = document.querySelector("#text")
    if(event.target.parentNode.classList.contains("card")){
        
        producto={
            img:event.target.parentElement.querySelector("img").src,
            nombre:event.target.parentElement.querySelector("h4").textContent,
            precio:event.target.parentElement.querySelector(".fw-normal").textContent,
            desc:event.target.parentElement.querySelector("p").textContent,
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
            desc:event.target.parentElement.querySelector("p").textContent,
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