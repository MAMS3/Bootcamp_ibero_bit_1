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
    let genero = document.getElementById('genero').value
    let premioCliente = document.getElementById('validarEdad')
    let edad = document.getElementById('edadCliente').value
    let premio = ""
    console.log(edad)
    if (edad <= 10){
        if(genero == "mujer"){
            premio = "pizza hawaina"
        }else if(genero == "hombre"){
            premio = "pizza tres carnes"
        }
        premioCliente.innerHTML = 'reclame un jugo y ' + premio;
    }else if(edad >= 18){
        if(genero == "mujer"){
            premio = "pizza hawaina"
        }else if(genero == "hombre"){
            premio = "pizza tres carnes"
        }
        premioCliente.innerHTML =  'Reclame una cerveza y ' + premio;

    }else {
        premioCliente = document.getElementById('validarEdad')
        premioCliente.innerHTML ='No aplicas'; 
    }
}

function tablaMultiplicar(){
    let n = document.querySelector("#inputMulti").value
    
    let ulTabla = document.querySelector("#tabla")
    for(i = 1;i<=10;i++){
        ulTabla.innerHTML += `<li>${n} X ${i} = ${n*i}</li>`
    }
}
