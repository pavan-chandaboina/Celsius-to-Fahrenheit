function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    if (!isNaN(celsiusInput.value)) {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.innerText = `${celsius.toFixed(2)}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.innerText = "Please enter a valid temperature in Celsius.";
    }
}
