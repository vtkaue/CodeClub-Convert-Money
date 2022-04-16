const button = document.getElementById("covert-button")
const select = document.getElementById("currency-select")

const convertValues = async () => {
    const inputReais = document.getElementById("input-real").value

    const realValueText = document.getElementById("real-value-text")

    const currencyValueText = document.getElementById("currency-value-text")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML =
        currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputReais)

    if (select.value === 'US$ Dólar americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }
    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'BTC' }
        ).format(inputReais / bitcoin)
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currecy-img")

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/estados-unidos.svg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.svg"
    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.svg"
    }

    convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

