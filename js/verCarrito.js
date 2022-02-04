
export function verCarrito(carrito){
    let modalCarrito = new bootstrap.Modal(document.getElementById('modalCarrito'))

    let contenedor = document.querySelector("#contenedorCarrito")
    contenedor.innerHTML = ""
    carrito.forEach(producto => {
        
    
    let fila=document.createElement("div")
    fila.classList.add("row")

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-8","align-self-center")

    let fotoProducto=document.createElement("img")
    fotoProducto.classList.add("img-fluid","w-100")
    fotoProducto.src=producto.img

    let nombreProducto=document.createElement("h5")
    nombreProducto.textContent=producto.nombre

    let precioProducto=document.createElement("h6")
    precioProducto.textContent= producto.precio

    let cantidadProducto=document.createElement("h6")
    cantidadProducto.textContent=producto.cantidad+" Und"

    //Padres e hijos
    columna1.appendChild(fotoProducto)

    columna2.appendChild(nombreProducto)
    columna2.appendChild(precioProducto)
    columna2.appendChild(cantidadProducto)

    fila.appendChild(columna1)
    fila.appendChild(columna2)

    contenedor.appendChild(fila)
    })

    let pildora = document.querySelector("#pildora")

    let limpiador = document.querySelector("#limpiador")
    
    limpiador.addEventListener('click',()=>{
        contenedor.parentNode.innerHTML = ""
        pildora.textContent = ""
        contador= 0
    })
    modalCarrito.show()
}