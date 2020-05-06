const countrySelect = document.getElementById("countrySelect");
const countrySelect2 = document.getElementById("countrySelect2");
const swapBtn = document.getElementById("swapBtn");
const amount = document.getElementById("amount");
const amount2 = document.getElementById("amount2");
const example = document.getElementById("example");

let baseCountry = "KRW";
let objectCountry = countrySelect2.value;
let rate = 0;

function getData(){
    fetch(`https://prime.exchangerate-api.com/v5/904982415b4b0ed8d1ae2bc5/latest/${baseCountry}`).then(function(res, req){
        res.json().then(function(data){
            rate = data.conversion_rates[objectCountry];
            amount2.value = amount.value * rate;
            example.innerHTML = `1 ${baseCountry} = ${rate} ${objectCountry}`;
        })
        
    })
}

function handleConvert(){
    baseCountry = countrySelect2.value;
    objectCountry = countrySelect.value;
    let saved = countrySelect.value;
    countrySelect.value = countrySelect2.value;
    countrySelect2.value = saved;
    getData();
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
    getData();
}

function init(){
    countrySelect.addEventListener("change", handleSelect);
    countrySelect2.addEventListener("change", handleSelect2);
    swapBtn.addEventListener("click", handleConvert);
    amount.addEventListener("keydown", handleTyping);
    amount.addEventListener("change", handleTyping);
    getData();
    
}

init();