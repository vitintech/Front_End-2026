const celsius = document.getElementById("celsius");

const fahrenheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", function () {

    let valorCelsius = parseFloat(celsius.value);

    if (isNaN(valorCelsius)) {

        fahrenheit.value = "";
        return;
    }

    let resultado = (valorCelsius * 9 / 5) + 32;

    fahrenheit.value = resultado.toFixed(2);
});

fahrenheit.addEventListener("input", function () {

    let valorFahrenheit = parseFloat(fahrenheit.value);

    if (isNaN(valorFahrenheit)) {

        celsius.value = "";
        return;
    }

    let resultado = (valorFahrenheit - 32) * 5 / 9;

    celsius.value = resultado.toFixed(2);
});