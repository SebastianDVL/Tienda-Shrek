
export function verCarrito(carrito,h3){
    
    let contenedor = document.querySelector("#contenedorCarrito")

    
    contenedor.innerHTML = ""
    let subtotals = []
    let cantidades = [0]
    carrito.forEach(producto => {    
    
        let fila=document.createElement("div")
        fila.classList.add("row","border-top","border-bottom")
        

        let columna1=document.createElement("div")
        columna1.classList.add("col-12","col-md-4","border-end","p-3")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-8","d-flex","flex-column","justify-content-between","p-3")

        let fotoProducto=document.createElement("img")
        fotoProducto.classList.add("img-fluid","w-100")
        fotoProducto.style = "height: 13em"
        fotoProducto.src=producto.img

        let nombreProducto=document.createElement("h4")
        nombreProducto.textContent=producto.desc
        nombreProducto.title = producto.nombre
        nombreProducto.classList.add("fw-bold")

        let precioProducto=document.createElement("h3")
        precioProducto.textContent= producto.precio


        let cantidadProducto=document.createElement("h5")
        cantidadProducto.textContent="Cantidad: " + producto.cantidad
        cantidadProducto.classList.add("text-muted")

        cantidades.push(parseInt(producto.cantidad))
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
    //Decirle al usuario cuantos productos esta llevando
    let totalText = document.querySelector("#totalText")
    cantidades = cantidades.reduce((currentCantidad,cantidad) =>{
        return cantidad + currentCantidad
    },0)
    cantidades  == 1 ? totalText.textContent = `Total (${cantidades} producto):` : totalText.textContent = `Total (${cantidades} productos):`

    
     //cambiar de COP a USD  
    let convert = document.querySelector("#convert")

    if(carrito.length > 0){
        convert.disabled = false
    }

    convert.innerHTML = "Convert to USD"

    let bool = false

    convert.addEventListener("click",()=>{
        bool = !bool
        if(bool){
            total *= 0.00025 ;
            totalH3.innerHTML = "$" + Intl.NumberFormat("en-US").format(total) + " USD"
            convert.innerHTML ="Convert to COP"  
        }else{
            total *= 4000 ;
            totalH3.innerHTML = "$" + Intl.NumberFormat("de-DE").format(total) + " COP"
            convert.innerHTML ="Convert to USD"  
        }
         
        
    })
    //calcular total
    
    let total = subtotals.reduce((currentTotal,subtotal) =>{
        return subtotal + currentTotal
    },0)

    

    let totalH3 = document.querySelector("#total")
    totalH3.innerHTML = "$" + Intl.NumberFormat("de-DE").format(total) + " COP"

    //Limpiar el carrito con boton

    let pildora = document.querySelector("#pildora")

    let limpiador = document.querySelector("#limpiador")

    limpiador.addEventListener('click',e => { 
    e.stopPropagation()
      limpiarCarrito()
     })
     //comprar los productos del carrito
    let comprar = document.querySelector("#comprar")
    let toast = new bootstrap.Toast(document.querySelector("#toast"))
    comprar.addEventListener('click',(e) =>{
        if(carrito.length > 0 ){
            limpiarCarrito()
            toast.show()
        }
    })

        //Funcion de limpiar carrito
    function limpiarCarrito(){
        contenedor.innerHTML = ""
        pildora.innerHTML = ""
        totalH3.innerHTML = "$0"
        carrito.length = 0
        h3.innerHTML = '<i class="fa-solid fa-cart-arrow-down fs-1"></i>No Items Yet...'
        total = 0
        convert.disabled = true
        totalText.innerHTML = "Total(0 productos):"
    }
 
}