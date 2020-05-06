const countrySelect = document.getElementById("countrySelect");
const countrySelect2 = document.getElementById("countrySelect2");
const swapBtn = document.getElementById("swapBtn");
const amount = document.getElementById("amount");
const amount2 = document.getElementById("amount2");

let baseCountry = "KRW";
let objectCountry = countrySelect2.value;

console.log(objectCountry)

function getData(){
    fetch(`https://prime.exchangerate-api.com/v5/904982415b4b0ed8d1ae2bc5/latest/${baseCountry}`).then(function(res, req){
        res.json().then(function(data){
            console.log(data.conversion_rates[objectCountry])
        })
        
    })
}

function handleConvert(){
    let saved = countrySelect.value;
    countrySelect.value = countrySelect2.value;
    countrySelect2.value = saved;
}

function handleSelect(){
    baseCountry = countrySelect.value;
    getData();
}

function handleSelect2(){
    objectCountry = countrySelect2.value;
    getData();
}

function handleTyping(){
    amount2.value = amount.value
}

function init(){
    countrySelect.addEventListener("change", handleSelect);
    countrySelect2.addEventListener("change", handleSelect2);
    swapBtn.addEventListener("click", handleConvert);
    amount.addEventListener("keydown", handleTyping);
    getData();
}

init();