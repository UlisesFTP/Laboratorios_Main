const form = document.querySelector("form");
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing from form submitting


    //Verifica si el correo esta vacio , si lo esta el borde del text area se hace rojo y despues hace un efecto de sacudirse
    //if email and password is blank then add shake class in it else call specified function
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

    //quita el efecto de sacudiderse de los textfields con el setTimeout
    setTimeout(()=>{ //remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    //Llama la funcion que checa que el email sea valido
    eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
    //Llama la funcion que checa que el password sea valido
    pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup


    //Funcion que checa que el email(usuario)
    function checkEmail(){ //checkEmail function
        //Expresion regular que checa que el formato del correo sea correcto
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email

        if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
            eField.classList.add("error");
            eField.classList.remove("valid");
            //si el formato del correo no es correo inyecta clase html que muestra el error
            let errorTxt = eField.querySelector(".error-txt");
            //if email value is not empty then show please enter valid email else show Email can't be blank
            //verifica tambien que el correo sea valido
            (eInput.value != "") ? errorTxt.innerText = "Ingresa un correo valido" : errorTxt.innerText = "Campo Vacio";
        }else{ //if pattern matched then remove error and add valid class
            
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass(){ //checkPass function
        if(pInput.value == ""){ //if pass is empty then add error and remove valid class
            pField.classList.add("error");
            pField.classList.remove("valid");
        }else{ //if pass is empty then remove error and add valid class
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    //if eField and pField doesn't contains error class that mean user filled details properly
    if(!eField.classList.contains("error") && !pField.classList.contains("error")){
        window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
    }
}