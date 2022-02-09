import{ getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

let btnRegistro = document.querySelector("#registro")

//Validacion en tiempo real de formulario
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let span = document.querySelector("#invalid")

mail.addEventListener("blur", e => {
    let val = e.target.value
    
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(val)) {
        span.innerHTML = "Correo Invalido!"    
        btnRegistro.disabled = true
    }else{
        span.innerHTML = ""
        btnRegistro.disabled = false
    }
})

pasword.

btnRegistro.addEventListener('click', e =>{
    e.preventDefault()
    //obtener valor de casa input
    let emailVal = email.value
    let passwordVal = password.value


    //agregar la rutina para llevar los datos a firebase
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, emailVal, passwordVal)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("Todo bien carechamba")
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error")
    });
})