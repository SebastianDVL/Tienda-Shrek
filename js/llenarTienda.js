
//Funcion para llenar  de productos dinamicamente(Automatico) la tienda 
export let productos = [
    {name:"Gafas",img:"../img/antifaz.webp",price:15000,desc: "Gafas De Sol Con Forma De Shrek Fotocromáticas Polarizadas Hombre"},
    {name:"Aretes",img:"../img/aretes.webp",price:8000,desc: "Aretes Pendientes Mujer Y Hombre Con Forma De Shrek De Acero Inoxidable"},
    {name:"Coleccion Peliculas",img:"../img/blueray.webp",price:32000,desc: "Todas Las Peliculas De Shrek En Blueray (5 Peliculas) Calidad Cine"},
    {name:"Camisa",img:"../img/camisa.webp",price:45000,desc: "Camisa XXL Tema Shrek Hombre Diseño(Exclusivo) En Algodon"},
    {name:"Camiseta",img:"../img/camiseta.webp",price:48000,desc: "Camiseta XL Dama Mujer Estilo Clasico Shrek En Algodon Sexy"},
    {name:"Careta",img:"../img/careta.webp",price:5000,desc: "Careta Bioseguridad Adulto Tipo Gafa Proteccion Facial Shrek"},
    {name:"Cartas",img:"../img/cartas.webp",price:60000,desc: "Juego Baraja De Cartas Shrek Todos Los Personajes Coleccioables"},
    {name:"Delantal",img:"../img/delantal.webp",price:38000,desc: "Delantal Cocina Antifluido Con Imagen De Shrek Chef Profesional"},
    {name:"Diadema",img:"../img/diadema.webp",price:12000,desc: "Balaca Diadema Hombre/Mujer Orejas De Shrek Halloween"},
    {name:"Disfraz",img:"../img/disfraz.webp",price:73000,desc: "Cosplay Shrek Para Niños Halloween 8-9 Años Completo"},
    {name:"Funko",img:"../img/funko.webp",price:118000,desc: "Funko Pop Shrek Para Siempre Caja Y Protector Incluido "},
    {name:"Gorro",img:"../img/gorro.webp",price:20000,desc: "Gorro Tuka Verde Shrek Hombre Mujer De Lana Hecho A Mano"},
    {name:"Hoodie",img:"../img/hoodie.webp",price:90000,desc: "Buso Hoodie Con Capota Nicolas Cage Shrek Fondo Negro Hombre XL"},
    {name:"Juego",img:"../img/juego.webp",price:102000,desc: "Shrek Forever After The Final Chapter PS3 Standard Edition Fisico"},
    {name:"Juego de Mesa",img:"../img/juegomesa.webp",price:55000,desc: "Operation Shrek Juego De Mesa Niños Original Español"},
    {name:"Kit Imprimible",img:"../img/kit.webp",price:27000,desc: "Kit Imprimible Shrek Para Niños 100% Editable"},
    {name:"Lampara",img:"../img/lampara.webp",price:58000,desc: "Lampara Cabeza De Shrek Con Control Luz Led Color Verde Recargable Con Base"},
    {name:"Peluche",img:"../img/peluche.webp",price:83000,desc: "Peluche Shrek Luminoso Reversible Original Importado"},
    {name:"Mascara",img:"../img/mascara.webp",price:17000,desc: "Mascara De Shrek Con Expresion Feliz Adulto"},
    {name:"Tapabocas",img:"../img/tapabocas.webp",price:3000,desc: "Tapabocas Niños Tema Shrek Verde Lavable Termosellado"}
    
]

export function llenarTienda(){


const ROW = document.querySelector('.row')

productos.forEach(producto => {

    let col = document.createElement('div')
    col.classList.add("col")

    let card = document.createElement('div')
    card.classList.add("card","h-100", "border-0")

    let img = document.createElement('img');
    img.src = producto.img
    img.classList.add("card-img-top")
    img.style = "height: 13em" 

    let cardBody = document.createElement('div')
    cardBody.classList.add("card-body","border-top","d-flex","flex-column")

    let title = document.createElement('h4')
    title.classList.add("card-title","text-warning","fw-bolder")
    title.textContent = producto.name

    let text = document.createElement('p')
    text.classList.add("card-text","text-muted")
    text.textContent = producto.desc.slice(0,-30) + "..."

    let price = document.createElement('h4')
    price.classList.add("fw-normal")
    price.textContent = "$" + Intl.NumberFormat("de-DE").format(producto.price)

    let button = document.createElement('button')
    button.classList.add("btn","btn-success")
    button.type = "button"
    button.innerHTML = '<i class ="fa fa-shopping-cart me-1"></i>' + "Agregar Al Carrito"


    cardBody.appendChild(title)
    cardBody.appendChild(text) 
    cardBody.appendChild(price)
 
    card.appendChild(img) 
    card.appendChild(cardBody) 
    col.appendChild(card)
    ROW.appendChild(col)


})
}
