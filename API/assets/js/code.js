let urlAPI = "https://api.openbrewerydb.org/breweries"

let enero = fetch(urlAPI)
    // console.log(enero)
enero.then(res => res.json())
    .then((info) => {
        console.log(info)
    })