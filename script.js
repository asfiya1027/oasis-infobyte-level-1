const temperatureInput =
    document.getElementById("temperature");

const unitSelect =
    document.getElementById("unit");

const convertBtn =
    document.getElementById("convertBtn");

const clearBtn =
    document.getElementById("clearBtn");

const resultText =
    document.getElementById("resultText");


convertBtn.addEventListener("click", function () {

    const temperature =
        parseFloat(temperatureInput.value);

    const unit =
        unitSelect.value;


    if (isNaN(temperature)) {

        resultText.textContent =
            "Please enter a valid temperature.";

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit =
            (temperature * 9 / 5) + 32;

        kelvin =
            temperature + 273.15;
    }


    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius =
            (temperature - 32) * 5 / 9;

        kelvin =
            celsius + 273.15;
    }


    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius =
            temperature - 273.15;

        fahrenheit =
            (celsius * 9 / 5) + 32;
    }


    resultText.innerHTML =
        `${celsius.toFixed(2)} °C<br>
         ${fahrenheit.toFixed(2)} °F<br>
         ${kelvin.toFixed(2)} K`;
});


clearBtn.addEventListener("click", function () {

    temperatureInput.value = "";

    unitSelect.value = "celsius";

    resultText.textContent =
        "Enter a temperature to begin";
});