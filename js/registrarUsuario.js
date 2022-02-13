import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"
import {validateForm} from "./validate.js"


let btnIngreso = document.querySelector("#ingreso")
let btnRegistro = document.querySelector("#registro")

//Validacion de formulario en tiempo real

validateForm()


//Registro 

btnRegistro.addEventListener('click', e =>{
    e.preventDefault()
    //obtener valor de cada input
    let emailVal = email.value
    let passwordVal = password.value

    //agregar la rutina para llevar los datos a firebase
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailVal, passwordVal)
    .then((userCredential) => {
        const user = userCredential.user;
        clear()
        btnRegistro.disabled = true
        toggleCollapse('<i class="fa-solid fa-check"></i>Registrado Correctamente',"text-danger","text-success")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    
        toggleCollapse(`Error: ${errorCode} : ${errorMessage}`,"text-success","text-danger")
    });
})

//ingreso


btnIngreso.addEventListener('click', e =>{
    e.preventDefault()
    let emailVal = email.value
    let passwordVal = password.value

    //agregar la rutina para llevar los datos a firebase
    const auth = getAuth();
    signInWithEmailAndPassword(auth,emailVal,passwordVal)
    .then((userCredential)=>{
        const user = userCredential
        clear()

        toggleCollapse('<i class="fa-solid fa-check"></i>Haz Inicioado Sesion Correctamente',"text-danger","text-success")

    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message

        toggleCollapse(`Error: ${errorCode} : ${errorMessage}`,"text-success","text-danger")
    })

})

//funcion de aparecer y desaparecer Collapse 

function toggleCollapse(msg,colorToRemove,colorToSet){
        var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))

        collapseElementList.forEach(ce=>{
            
        ce.classList.remove(colorToRemove)
        ce.classList.add(colorToSet)
        ce.children[0].innerHTML= msg
        })

        function collapseElement(){
            collapseElementList.map(function (collapseEl) {
                return new bootstrap.Collapse(collapseEl)
            })
        }
        collapseElement()

        setTimeout(collapseElement,3000)
 }

 function clear(){
    email.value = ""
    password.value = ""
}
