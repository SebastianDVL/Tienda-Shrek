let email = document.querySelector("#email")
let span = document.querySelector("#invalidEmail")
let password = document.querySelector("#password")
let span2= document.querySelector("#invalidPassword")

export function validateForm(btn) { 
 
        email.addEventListener("blur", e => {
            validate(e,/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,"invalid Email!",email,password,span,btn)
        })
        password.addEventListener('blur', e => {
            let msg 
            if(!btn.classList.contains("hide")){
                msg = ""
            }
            else{
                msg = "Password must contain at least 8 characters with at least 2 numericals"
            }
            validate(e,/^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/i,msg,password,email,span2,btn )
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