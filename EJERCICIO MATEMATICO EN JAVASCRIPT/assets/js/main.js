function secuencia (numero , cantidadOperaciones= 0, arrayDataset = []){
    let resultado = 0 
    let datasetsChart = arrayDataset;
    if (numero != 1){
        console.log(numero)
        if (numero % 2 == 0){
            resultado = numero / 2
            document.querySelector("#secuenciaTotal").innerHTML += `${resultado} <br>`
            datasetsChart.push(resultado)
            cantidadOperaciones ++
            secuencia(resultado, cantidadOperaciones, datasetsChart)
            
            } else {
                resultado = (numero * 3) + 1
                document.querySelector("#secuenciaTotal").innerHTML += `${resultado} <br>`
                datasetsChart.push(resultado)
                cantidadOperaciones ++
                secuencia(resultado, cantidadOperaciones, datasetsChart)
        }
    } else {
        const ctx = document.getElementById(`myChart`);

        let labelsChart = []
        for (let x = 0; x <= cantidadOperaciones; x++){
            labelsChart.push(x)
        }
        new CharacterData(ctx,{
            type: 'line',
            data: {
                labels: labelsChart,
                datasets :[{
                    label: '# of Votes',
                    data: datasetsChart,
                    borderWidth: 1
                }]
            }
        })
    }
}

function borrarContenido(){
    document.querySelector("#secuenciatotal").innerHTML = ''
}