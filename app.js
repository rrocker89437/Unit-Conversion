/*
1 meter = 3.2808 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/
// Get Buttons By ID
const convertBtn = document.getElementById("convert-btn");
const resetBtn = document.getElementById("reset-btn");
const inputEl = document.getElementById("input-el");

// Get P tags by ID
const convert1 = document.getElementById("conversion-1");
const convert2 = document.getElementById("conversion-2");
const convert3 = document.getElementById("conversion-3");

// Add a click event listener for Convert Btn
//Convert user input into metric/imperial
// round number to 3 decimal places
//change P tag inner text with inner.html
convertBtn.addEventListener("click", function () {
  if (inputEl.value != "") {
    convert1.innerHTML = `
        ${inputEl.value} Meters = ${(inputEl.value * 3.2808).toFixed(
      3
    )} Feet | ${inputEl.value} Feet = ${(inputEl.value / 3.2808).toFixed(
      3
    )} Meters
        `;

    convert2.innerHTML = `
    ${inputEl.value} Liters = ${(inputEl.value * 0.264172).toFixed(
      3
    )} Gallons | ${inputEl.value} Gallons = ${(
      inputEl.value / 0.264172
    ).toFixed(3)} Liters
    `;

    convert3.innerHTML = `
    ${inputEl.value} Kilograms = ${(inputEl.value * 2.20462).toFixed(3)} 
    Pounds | ${inputEl.value} Pounds = ${(inputEl.value / 2.20462).toFixed(
      3
    )} Kilograms
    `;
  }
});

// Add click event listener for reset btn
// when clicked, reset user input and conversions
resetBtn.addEventListener("click", function () {
  inputEl.value = "";
  convert1.innerHTML = "";
  convert2.innerHTML = "";
  convert3.innerHTML = "";
});
