import { infoProducto,element} from "./controlador.js"
import {productos} from "./llenarTienda.js"

export function ampliarInfoProducto (){ 
    let imgInfo = document.querySelector("#imgInfo")
    let title = document.querySelector("#title")
    let text = document.querySelector("#text")
    let price = document.querySelector("#price")

    imgInfo.src = productos[element].img
    title.textContent = productos[element].name
    text.textContent = productos[element].desc
    price.textContent = "$" + Intl.NumberFormat("de-DE").format(productos[element].price)
    

    infoProducto.show()
}
    