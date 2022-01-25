//Funcion para llenar  de productos dinamicamente(Automatico) la tienda 
function llenarTienda(){

let productos = [
    {name:"Antifaz",img:"../img/antifaz.webp",price:15000,desc: "..."},
    {name:"Aretes",img:"../img/aretes.webp",price:8000,desc: "..."},
    {name:"Coleccion Peliculas",img:"../img/blueray.webp",price:32000,desc: "..."},
    {name:"Camisa",img:"../img/camisa.webp",price:45000,desc: "..."},
    {name:"Camiseta",img:"../img/camiseta.webp",price:48000,desc: "..."},
    {name:"Careta",img:"../img/careta.webp",price:5000,desc: "..."},
    {name:"Cartas",img:"../img/cartas.webp",price:60000,desc: "..."},
    {name:"Delantal",img:"../img/delantal.webp",price:38000,desc: "..."},
    {name:"Diadema",img:"../img/diadema.webp",price:12000,desc: "..."},
    {name:"Disfraz",img:"../img/disfraz.webp",price:73000,desc: "..."},
    {name:"Funko",img:"../img/funko.webp",price:118000,desc: "..."},
    {name:"Gorro",img:"../img/gorro.webp",price:20000,desc: "..."},
    {name:"Hoodie",img:"../img/hoodie.webp",price:90000,desc: "..."},
    {name:"Juego",img:"../img/juego.webp",price:102000,desc: "..."},
    {name:"Juego de Mesa",img:"../img/juegomesa.webp",price:55000,desc: "..."},
    {name:"Kit Imprimible",img:"../img/kit.webp",price:27000,desc: "..."},
    {name:"Lampara",img:"../img/lampara.webp",price:58000,desc: "..."},
    {name:"Peluche",img:"../img/peluche.webp",price:83000,desc: "..."},
    {name:"Mascara",img:"../img/mascara.webp",price:17000,desc: "..."},
    {name:"Tapabocas",img:"../img/tapabocas.webp",price:3000,desc: "..."}
    
]
const ROW = document.querySelector('.row')

productos.forEach(producto => {

    let col = document.createElement('div')
    col.classList.add("col")

    let card = document.createElement('div')
    card.classList.add("card")

    let img = document.createElement('img');
    img.src = producto.img
    img.classList.add("card-img-top")
    img.style = "height: 12em" 

    let cardBody = document.createElement('div')
    cardBody.classList.add("card-body")

    let title = document.createElement('h5')
    title.classList.add("card-title")
    title.textContent = producto.name

    let text = document.createElement('p')
    text.classList.add("card-text")
    text.textContent = producto.desc

    cardBody.appendChild(title)
    cardBody.appendChild(text) 
    card.appendChild(img) 
    card.appendChild(cardBody) 
    col.appendChild(card)
    ROW.appendChild(col)

})
}
