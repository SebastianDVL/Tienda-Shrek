import{ getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

let btnRegistro = document.querySelector("#registro")

//Validacion en tiempo real de formulario
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let span = document.querySelector("#invalidEmail")
let span2 = document.querySelector("#invalidPassword")

email.addEventListener("blur", e => {
    let val = e.target.value
    
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(val)) {
        span.innerHTML = "Correo Invalido!"    
        btnRegistro.disabled = true
        email.classList.add("border-danger")
    }else{
        span.innerHTML = ""
        btnRegistro.disabled = false
        email.classList.remove("border-danger")
    }
})
password.addEventListener('blur', e => {
    let val = e.target.value
    if(!/^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/i.test(val) || val == ""){
        span2.innerHTML = "Password must contain  At least 8 characters with at least 2 numericals"    
        btnRegistro.disabled = true
        password.classList.add("border-danger")
    }else{
        span2.innerHTML = ""
        btnRegistro.disabled = false
        password.classList.remove("border-danger")
    }
})


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