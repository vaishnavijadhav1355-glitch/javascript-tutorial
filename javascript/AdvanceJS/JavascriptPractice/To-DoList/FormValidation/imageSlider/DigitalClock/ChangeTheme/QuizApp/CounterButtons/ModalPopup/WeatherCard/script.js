let weatherData = {
    delhi: {
        temperature: "32°C",
        condition: "Sunny"
    },

    mumbai: {
        temperature: "29°C",
        condition: "Cloudy"
    },

    chennai: {
        temperature: "34°C",
        condition: "Sunny"
    },

    bangalore: {
        temperature: "25°C",
        condition: "Rainy"
    }
};


function showWeather() {

    let cityInput = document.getElementById("cityInput").value;

    let city = cityInput.toLowerCase().trim();

    if (weatherData[city]) {

        document.getElementById("city").innerText =
            cityInput;

        document.getElementById("temperature").innerText =
            weatherData[city].temperature;

        document.getElementById("condition").innerText =
            weatherData[city].condition;

    } else {

        document.getElementById("city").innerText =
            "City not found";

        document.getElementById("temperature").innerText =
            "";

        document.getElementById("condition").innerText =
            "Please enter Delhi, Mumbai, Chennai or Bangalore.";
    }
}