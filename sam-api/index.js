const apiKey = "c2494073247a4a0c8e6180801241811"; // Replace with your OpenWeatherMap API key
const city = "London"; // Replace with the city you want
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch weather data
fetch(apiUrl)
    .then(response => response.json(){


        return  response.data





    })

    .then(data => {
        const weatherDiv = document.getElementById("weather");
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        weatherDiv.innerHTML = `
            <p><strong>City:</strong> ${data.name}</p>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Condition:</strong> ${description}</p>
        `;
    })
    
    .catch(error => {
        document.getElementById("weather").innerHTML = "Error loading weather data.";
        console.error("Error:", error);
    });