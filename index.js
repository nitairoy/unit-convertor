
/* 1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// Generate all conversions when the user clicks to convert
// Round the numbers down to three decimal places

const perMeter = 3.281
const perLiter = 0.264
const perKilogram =2.204

const form = document.getElementById("number-el")
const getNumber = document.getElementById("num-input")
const meterTofeet = document.getElementById("meter") 
const literTogallon = document.getElementById("liter")
const kilogramTopound = document.getElementById("pound") 

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let getNumberVal = Number(getNumber.value)
    let feet = getNumberVal * perMeter
        feet = Number.parseFloat(feet).toFixed(3)
    meterTofeet.textContent = `${getNumberVal} meters = ${feet} feets`
    let gallon = getNumberVal * perLiter
        gallon = Number.parseFloat(gallon).toFixed(3)
    literTogallon.textContent = `${getNumberVal} liters = ${gallon} gallons`
    let pound = getNumberVal * perKilogram
        pound = Number.parseFloat(pound).toFixed(3)
    kilogramTopound.textContent = `${getNumberVal} kilograms = ${pound} pounds`    
})
