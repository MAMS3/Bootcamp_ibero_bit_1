let urlAPI = "https://pokeapi.co/api/v2/pokemon"

let enero = fetch(urlAPI)
// console.log(enero)
enero.then(res => res.json())
    .then((info) => {
        console.log(info)
    })

    