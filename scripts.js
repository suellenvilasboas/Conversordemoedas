let botao = document.getElementById("button")
let select = document.getElementById("selectmoedas")


async function convertermoedas(){

let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function (answer){
   return answer.json()
})

let dolar = moedas.USDBRL.high
let euro = moedas.EURBRL.high

    
    let inputvaloremreais = Number (document.getElementById("input").value)
    let inputmoedas = document.getElementById("inputmoedas")
    let textoreal = document.getElementById("textoreal")

 if (select.value === "$ Dólar Americano"){
        let valoremdolares = inputvaloremreais / dolar
        inputmoedas.innerHTML = valoremdolares.toLocaleString("en-US",{style: "currency", currency: "USD"})

}
    
if (select.value === "€ Euro"){
    let valoremeuros = inputvaloremreais / euro
    inputmoedas.innerHTML = valoremeuros.toLocaleString("de-DE",{style: "currency", currency: "EUR"})
}

textoreal.innerHTML = inputvaloremreais.toLocaleString("pt-BR",{style: "currency", currency: "BRL"})

}

// Essa função é responsável por trocar a bandeira e nome das moedas
function trocademoeda(){
let textomoedas = document.getElementById("textomoedas")
let bandeiramoedas = document.getElementById("bandeiramoedas")

if(select.value === "$ Dólar Americano") {
    textomoedas.innerHTML = "Dólar Americano"
    bandeiramoedas.src = "./img/united-states-of-america.png"
}

if (select.value === "€ Euro") {
    textomoedas.innerHTML = "Euro"
    bandeiramoedas.src = "./img/euro.png"

    }

    convertermoedas()
}

botao.addEventListener("click", convertermoedas)
select.addEventListener("change", trocademoeda)

