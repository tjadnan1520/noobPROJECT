const box = document.getElementById("box");
const btn = document.getElementById("btn");
const cf = document.getElementById("cf"); 
const fc = document.getElementById("fc"); 
const result = document.getElementById("result"); 
let value;
let celsius;
let fahrenheit; 

btn.onclick = function() {
    value = Number(box.value);

    if (cf.checked) {
        fahrenheit = (value * 9 / 5) + 32;
        result.textContent = `${value}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else if (fc.checked) {
        celsius = (value - 32) * 5 / 9;
        result.textContent = `${value}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        result.textContent = `Please select a conversion type.`;
    }
}  
