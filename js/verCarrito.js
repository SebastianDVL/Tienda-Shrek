
export function verCarrito(carrito){
    
    let modalCarrito = new bootstrap.Modal(document.getElementById('modalCarrito'))

    let contenedor = document.querySelector("#contenedorCarrito")
    contenedor.innerHTML = ""
    let subtotals = []

    carrito.forEach(producto => {    
    
    let fila=document.createElement("div")
    fila.classList.add("row","p-4","border-top")
    

    let columna1=document.createElement("div")
    columna1.classList.add("col-12","col-md-4")

    let columna2=document.createElement("div")
    columna2.classList.add("col-12","col-md-8","d-flex","flex-column","justify-content-between")

    let fotoProducto=document.createElement("img")
    fotoProducto.classList.add("img-fluid","w-100")
    fotoProducto.style = "height: 13em"
    fotoProducto.src=producto.img

    let nombreProducto=document.createElement("h4")
    nombreProducto.textContent=producto.desc
    nombreProducto.title = producto.nombre

    let precioProducto=document.createElement("h3")
    precioProducto.textContent= producto.precio
    precioProducto.classList.add("text-muted")

    let cantidadProducto=document.createElement("h5")
    cantidadProducto.textContent="Cantidad: " + producto.cantidad
    cantidadProducto.classList.add("text-muted")

    let realNumber = producto.precio.slice(1).replace(".","")
    let subtotalValue = realNumber * producto.cantidad 
    let subtotal = document.createElement("h5")
    subtotal.classList.add("text-muted")
    subtotal.textContent = "Subtotal: $" +Intl.NumberFormat("de-DE").format(subtotalValue)

    subtotals.push(subtotalValue)
    //Padres e hijos
    columna1.appendChild(fotoProducto)

    columna2.appendChild(nombreProducto)
    columna2.appendChild(precioProducto)
    columna2.appendChild(cantidadProducto)
    columna2.appendChild(subtotal)

    fila.appendChild(columna1)
    fila.appendChild(columna2)

    contenedor.appendChild(fila)
    })

    modalCarrito.show()
     //cambiar de COP a USD  
    let convert = document.querySelector("#convert")

    convert.addEventListener("click",()=>{

        if(convert.innerHTML== "Convert to USD"){
            total *= 0.00025 ;
        totalH3.innerHTML = "Total: $" + Intl.NumberFormat("en-US").format(total) + " USD"
        convert.innerHTML ="Convert to COP"  
        }
        else{
            total *= 4000 ;
        totalH3.innerHTML = "Total: $" + Intl.NumberFormat("en-US").format(total) + " COP"
        convert.innerHTML ="Convert to USD"  
        }
         
        
    })
    //calcular total
    
    let total = 0

    subtotals.forEach(subtotal =>{
        total += subtotal
    })

    let totalH3 = document.querySelector("#total")
    totalH3.innerHTML = "Total: $" + Intl.NumberFormat("de-DE").format(total) + " COP"

    //Limpiar el carrito

    let pildora = document.querySelector("#pildora")

    let limpiador = document.querySelector("#limpiador")

    limpiador.addEventListener('click',()=>{
        contenedor.innerHTML = ""
        pildora.innerHTML = ""
        totalH3.innerHTML = "Total: $0"
        carrito.length = 0
    })

   
}