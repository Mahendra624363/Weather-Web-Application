const apiKey = "77b244311d1602a2061aae197dfaa830"; // Replace with your OpenWeatherMap API key
let isCelsius = true; // Default unit

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  const units = isCelsius ? "metric" : "imperial";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  fetchWeatherData(url);
}
function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const units = isCelsius ? "metric" : "imperial";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
      fetchWeatherData(url);
    },
    (error) => {
      let message = "Unable to retrieve your location.";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          message = "Permission denied. Please allow location access.";
          break;
        case error.POSITION_UNAVAILABLE:
          message = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          message = "The request to get your location timed out.";
          break;
        default:
          message = "An unknown error occurred.";
          break;
      }
      document.getElementById("weatherResult").innerHTML = `<p style="color:yellow;">${message}</p>`;
    }
  );
}

function fetchWeatherData(apiUrl) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        document.getElementById("weatherResult").innerHTML = `<p>${data.message}</p>`;
        return;
      }
      displayWeather(data);
    })
    .catch(err => {
      console.error(err);
      alert("Error fetching weather data.");
    });
}

function displayWeather(data) {
  const unitSymbol = isCelsius ? "°C" : "°F";
  const html = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
    <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
    <p>🌡 Temp: ${data.main.temp} ${unitSymbol}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🌬 Wind: ${data.wind.speed} ${isCelsius ? "m/s" : "mph"}</p>
  `;
  document.getElementById("weatherResult").innerHTML = html;
}

function toggleUnit() {
  isCelsius = !isCelsius;
  document.getElementById("unitLabel").textContent = isCelsius ? "Celsius (°C)" : "Fahrenheit (°F)";
  
  // Reload weather if previously fetched
  const city = document.getElementById("cityInput").value.trim();
  if (city) {
    getWeather();
  }
}
