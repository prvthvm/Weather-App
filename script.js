function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');

    const location = locationInput.value;

    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '852311ff9d354668a96152215241601';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Delhi}&appid=${apiKey}`;

    // Fetch weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Adjust the property names based on the actual structure of the API response
            const temperature = data.main.temp;
            const condition = data.weather[0].description;

            weatherInfo.innerHTML = `Current Temperature: ${temperature}°C, Condition: ${condition}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = 'Error fetching data';
        });
}
