function suma1() {
    let numeroUsuario = document.getElementById('suma-pantalla1').value
    let calculo = 0
    for (let i = 0; i <= numeroUsuario; i++) {
        calculo = calculo + i;
    }
    document.querySelector("#resultadoPunto1").innerHTML = calculo
}

function numeropareimpar() {
    let number = document.getElementById('par-impar').value
    if (number % 2 == 0){
        let html = document.getElementById('respuestas')
        html.innerHTML = number + ' es par';
        }else { 
            html = document.getElementById('respuestas') 
        html.innerHTML =  number + ' es impar';  
    }
}

function premio () {
    let usuario = document.getElementById('dama').value
    let premioCliente = document.getElementById('validarEdad')
    let edad = document.getElementById('edadCliente').value
    if (edad <= 10){
        premioCliente.innerHTML = usuario + 'reclame un jugo';
    }else if(edad >= 18){
        premioCliente.innerHTML = usuario + 'Reclame una cerveza';

    }else {
        premioCliente = document.getElementById('validarEdad')
        premioCliente.innerHTML = usuario + 'No aplicas'; 
    }
}

