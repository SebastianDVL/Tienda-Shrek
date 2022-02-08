import{ getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js"

let btnRegistro = document.querySelector("#registro")

btnRegistro.addEventListener('click', e =>{
    e.preventDefault()
    //obtener valor de casa input
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let confirmPassword = document.querySelector("#confirmPassword").value
    //validar formulario

    //agregar la rutina para llevar los datos a firebase
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password,confirmPassword)
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