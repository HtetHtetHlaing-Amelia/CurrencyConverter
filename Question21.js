const url = "https://v6.exchangerate-api.com/v6/66e81f95aad64b3a5e0acac6/latest/USD";
async function fetchExchangeRate() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Accessing object
       // console.log(data.conversion_rates);
        for (const key in data.conversion_rates) {
            //console.log(key);
            if (key != "USD") {
                document.getElementById("currency").innerHTML +=
                    `<option value="${data.conversion_rates[key]}">${key}</option>`
            }
        }

    } catch (error) {
        console.log("An error occurred:");
    }
}
fetchExchangeRate();
/** for input number value and output */
function calculateCurrency(obj) {
    try{
        var number = obj.value;
        // console.log(number);
        var selectValue = document.getElementById("currency");
        var currencyValue = selectValue.value;
        //console.log(currencyValue);
        /** Calculate changed currency */
        var ans = number * currencyValue;
        let currencyText = selectValue.options[selectValue.selectedIndex].text;
        let finalAnswer = document.getElementById("result");
        finalAnswer.innerHTML = 
        `<div> ${ans} : ${currencyText}</div>`;
        
    }
    catch(err){
console.log(err.message);
    }

}

