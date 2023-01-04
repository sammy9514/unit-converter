/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meteretofeet = 3.281
const feettometer = 0.3048
const literstogallon = 0.264
const gallontoliters = 3.7854
const kilogramstopounds = 2.204
const poundstokilograms = 0.453

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meteretofeet).toFixed(3)} feet | ${baseValue}    feet = ${(baseValue * feettometer).toFixed(3)} meters`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literstogallon).toFixed(3)} gallon | ${baseValue} gallons = ${(baseValue * gallontoliters).toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kilogramstopounds).toFixed(3)} pounds | ${baseValue}    pounds = ${(baseValue * poundstokilograms).toFixed(3)} kilos`
})