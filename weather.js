const weatherApi = 'https://weather-api.yousefelghoul.me/api/v1/mini-weather'

function getWeather() {
    return fetch(weatherApi)
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    });
}

function updateWeather() {
    getWeather()
        .then(json => {
        console.log(json);
        const { temperature, description } = json;
        document.getElementById("temp").innerHTML = `${Math.round(temperature)} °C`;
        document.getElementById("weatherDescription").innerHTML = `${description} `;
        })
        .catch(error => {
        console.error('Error fetching weather data:', error);
        });
}