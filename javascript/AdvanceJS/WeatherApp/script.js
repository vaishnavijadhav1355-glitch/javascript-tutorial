const apiKey = "3d81d9f39555da48731abd052bd1beb6";


async function searchWeather() {

    let city = document.getElementById("city").value.trim();

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    let url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    getWeather(url);
}


function getLocation() {

    if (!navigator.geolocation) {
        alert("Your browser does not support location");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        
        function(position) {

            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let url =
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            getWeather(url);
        },

        function() {
            alert("Please allow location permission");
        }
    );
}


async function getWeather(url) {

    try {

        let response = await fetch(url);

        let data = await response.json();

        console.log(data);


        // Invalid API key
        if (data.cod === 401) {
            alert("Invalid API Key");
            return;
        }


        // City not found
        if (data.cod === 404) {
            alert("City not found");
            return;
        }


        if (data.cod !== 200) {
            alert(data.message);
            return;
        }


        // Show weather page
        document.getElementById("searchBox").style.display = "none";

        document.getElementById("weatherBox").style.display = "block";


        document.getElementById("weather").innerHTML = `

            <img
                class="weather-icon"
                src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            >

            <div class="temperature">
                ${Math.round(data.main.temp)}°C
            </div>

            <p class="condition">
                ${data.weather[0].description}
            </p>

            <div class="city-name">
                📍 ${data.name}, ${data.sys.country}
            </div>


            <div class="details">

                <div class="detail">

                    <strong>
                        🌡️ ${Math.round(data.main.feels_like)}°C
                    </strong>

                    Feels Like

                </div>


                <div class="detail">

                    <strong>
                        💧 ${data.main.humidity}%
                    </strong>

                    Humidity

                </div>

            </div>


            <div class="details">

                <div class="detail">

                    <strong>
                        💨 ${data.wind.speed} m/s
                    </strong>

                    Wind Speed

                </div>


                <div class="detail">

                    <strong>
                        🔽 ${data.main.pressure} hPa
                    </strong>

                    Pressure

                </div>

            </div>

        `;

    }

    catch (error) {

        console.log(error);

        alert("Unable to get weather data");

    }

}


function goBack() {

    document.getElementById("weatherBox").style.display = "none";

    document.getElementById("searchBox").style.display = "block";

}