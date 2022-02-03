export function buscar(e,productos){
    let cards = document.querySelectorAll(".card")

    let value = e.target.value.toLowerCase()

    productos.forEach((producto,index)=>{
        let isVisible = producto.name.toLowerCase().includes(value)
        cards[index].classList.toggle("invisible",!isVisible)
    })
}