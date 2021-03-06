export function buscar(e){
    let cards = document.querySelectorAll(".card")

    let value = e.target.value.toLowerCase().replace(/ /g, "")

    cards.forEach((card)=>{
        let title = card.lastChild.firstChild.textContent.replace(/ /g, "")

        let isVisible = title.toLowerCase().includes(value)
            
        card.parentNode.classList.toggle("hide",!isVisible)
    })
    
    //En caso de no encontrar ningun producto...

    let noItems = document.querySelector("#noItems")

    let hiddenElements = document.querySelectorAll(".hide")

    if(hiddenElements.length == 20){
        noItems.innerHTML= 'Sorry... :('+ "</br><hr>"    +'"' + value + '"' + ' did not match any product...'
    }else{
        noItems.innerHTML = ''
    }
}   