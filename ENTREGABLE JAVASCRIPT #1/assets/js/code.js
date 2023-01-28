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
    let multiplicacionTabla = document.querySelector("#multiplicado").value
    let multiplicadorMaximo = document.querySelector("#multiplicador").value
    let listas = document.querySelector("#resultado_quinto_punto")
    for (let x=1; x <= multiplicadorMaximo; x++){
        listas.innerHTML += `${x} x ${multiplicacionTabla} = ${x*multiplicacionTabla} <br>`
    }

}

function matricula() {
    let promedioUsuario = document.querySelector("#estudiante").value
    let totalMatricula = 1000000
    let descuento = 0
        //(1000000 x 5 ) / 100
    if (promedioUsuario < 3) {
        document.querySelector("#beneficio").innerHTML = `El valor total de su matricula es ${totalMatricula}`
    } else if (promedioUsuario >= 3 && promedioUsuario <= 4) {
        // descuento = (totalMatricula * .95)    ---> el valor total de la matricula
        // descuento = totalMatricula * 0.05    ---> tambien me da el descuento
        descuento = (totalMatricula * 5) / 100
        totalMatricula = totalMatricula - descuento
        document.querySelector("#beneficio").innerHTML = `El valor total de su matricula es ${totalMatricula}`
    } else {
        descuento = (totalMatricula * 50) / 100
        totalMatricula = totalMatricula - descuento
        document.querySelector("#beneficio").innerHTML = `El valor total de su matricula es ${totalMatricula}`
    }
}











    