import{ getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

//Validacion de formulario en tiempo real
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
       
    }else if(password.value == ""){
        span.innerHTML = ""
        email.classList.remove("border-danger")
        btnRegistro.disabled = true
    }else{
        span.innerHTML = ""
        email.classList.remove("border-danger")
        btnRegistro.disabled = false
    }
})
password.addEventListener('blur', e => {
    let val = e.target.value
    if(!/^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/i.test(val)){
        span2.innerHTML = "Password must contain at least 8 characters with at least 2 numericals"    
        btnRegistro.disabled = true
        password.classList.add("border-danger")
    }else if(email.value == ""){
        span2.innerHTML = ""
        password.classList.remove("border-danger")
        btnRegistro.disabled = true
    }else{
        span2.innerHTML = ""
        password.classList.remove("border-danger")
        btnRegistro.disabled = false
    }
})

let btnRegistro = document.querySelector("#registro")


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
        email.value = ""
        password.value = ""
        btnRegistro.disabled = true
        var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
        var collapseList = collapseElementList.map(function (collapseEl) {
            return new bootstrap.Collapse(collapseEl)
        })

        setTimeout(esperar,3000)

        function esperar(){
            var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
            var collapseList = collapseElementList.map(function (collapseEl) {
                return new bootstrap.Collapse(collapseEl)
            })
        }
    })

    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})


let btnIngreso = document.querySelector("#ingreso")

btnIngreso.addEventListener('click', e =>{
    e.preventDefault()

    let emailVal = email.value
    let passwordVal = password.value

    //agregar la rutina para llevar los datos a firebase
    const auth = getAuth();
    signInWithEmailAndPassword(auth,emailVal,passwordVal)
    .then((userCredential)=>{
        const user = userCredential


    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message
    })
})