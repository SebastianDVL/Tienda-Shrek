export function agregarProducto(carrito){
    let pildora = document.querySelector("#pildora")
    pildora.classList.remove("invisible")

    let contador = 0
    
    carrito.forEach(producto => {
        contador = contador + Number(producto.cantidad)
    })
    pildora.textContent = contador
}