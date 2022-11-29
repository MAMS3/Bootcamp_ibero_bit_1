function validarFormulario(){
    let text = document.getElementById("nombreUsuario").value
    if(text ==""){
        alert("Llene el campo de los nombres")
        
    }

    let text1 = document.getElementById("apellidosUsuario").value
    if(text1 ==""){
        alert("Llene el campo de los apellidos")
    }

    let email = document.getElementById("emailUsuario").value
    if(email == ""){
        alert("LLene el campo del email")
    }

    let listaFormulario = document.getElementById("ciudadUsuario")
    if (listaFormulario.value ==""){
        let mensajeErrorSelect = document.getElementById("mensajeErrorSelect")
        mensajeErrorSelect.innerHTML = `error: Seleccione una opcion`
        listaFormulario.classList.add(`border` , `border-danger`)     
    }
    
}