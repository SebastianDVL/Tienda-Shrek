let email = document.querySelector("#email")
let span = document.querySelector("#invalidEmail")
let password = document.querySelector("#password")
let span2= document.querySelector("#invalidPassword")

let btnIngreso = document.querySelector("#ingreso")
let btnRegistro = document.querySelector("#registro")

const nav = document.querySelector("#navForm")


export function validateForm() { 
        //toglear entre registrar o ingresar
 
        nav.addEventListener("click",e =>{
            e.preventDefault();

            let target = e.target
            if(target != nav){
                if(target == nav.children[0].children[0]){
                    btnRegistro.classList.remove("hide")
                    btnIngreso.classList.add("hide")
                    target.classList.add("active")
                    target.parentNode.nextElementSibling.children[0].classList.remove("active")  
                    email= document.querySelector("#email")
                    password= document.querySelector("#password")
                    span = document.querySelector("#invalidEmail")
                    span2= document.querySelector("#invalidPassword")
                
                }else{
                    target.classList.add("active")
                    target.parentNode.previousElementSibling.children[0].classList.remove("active")
                    btnRegistro.classList.add("hide")
                    btnIngreso.classList.remove("hide")
                    span.innerHTML=" "
                    span2.innerHTML=""
                    email.classList.remove("border-danger")
                    password.classList.remove("border-danger")
                    span2 = null
                    span = null
                    email = null
                    password = null
                } 
            }  
        })

        //evento de blur para validacion en tiempo real de la contraseña y el mail
            email.addEventListener("blur", function deleteThis(e){
                validate(e,/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,"invalid Email!",email,password,span,btnRegistro)
            })
            password.addEventListener('blur', e => {
            
                validate(e,/^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/i,"Password must contain at least 8 characters with at least 2 numericals",password,email,span2,btnRegistro)
            })
        
}

//funcion de validacion para cualquier de los dos casos

function validate(e,regex,invalidMsg,input1,input2,span,btn){
    let val = e.target.value
        if (!regex.test(val)) {
            span.innerHTML = invalidMsg   
            input1.classList.add("border-danger")
        
        }else if(input2.value == "" || input2.classList.contains("border-danger")){
            span.innerHTML = ""
            input1.classList.remove("border-danger")
            input2.classList.add("border-danger")
            btn.disabled = true
        }else{
            span.innerHTML = ""
            input1.classList.remove("border-danger")
            btn.disabled = false
        }
   

   
}