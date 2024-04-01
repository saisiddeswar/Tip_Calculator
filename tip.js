let billbutton = document.getElementById("billAmount");
let tipbutton = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMessage = "Please Enter a Valid input";
let errorMessageElement = document.getElementById("errorMessage")

function calculateButton() {
    let billAmountInputValue = billbutton.value;
    let percentageTipInputValue = tipbutton.value;


    if (billAmountInputValue === "") { //Here, if the bill input value is empty, error message will be displayed
        errorMessageElement.textContent = errorMessage;
    } else if (percentageTipInputValue === "") { //Here, if the percentage tip input value is empty, error message will be displayed
        errorMessageElement.textContent = errorMessage;
    } else {
        errorMessageElement.textContent = ""; //Here, if the both input values are not empty, error message will be removed
        let billAmount = parseInt(billAmountInputValue); //getting bill amount and converting to integer
        let percentageTip = parseInt(percentageTipInputValue); //getting tip percentage and converting to integer

        let calculatedTip = (percentageTip / 100) * billAmount; //calculating tip
        let calculatedTotal = billAmount + calculatedTip; //calculating total


        tipAmountInput.value = calculatedTip; //assigning CalculatedTip to the input
        totalInput.value = calculatedTotal;
    }
}