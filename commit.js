// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const API_KEY = 4187a3e5d971d7a8750bed0cca0245e5;
const CITY = 'Singapore';

// Function to fetch and display weather data
async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error(error);
    document.getElementById('weather-info').innerHTML =
      '<p>Unable to fetch weather data. Please try again later.</p>';
  }
}

// Function to display weather data on the page
function displayWeather(data) {
  const weatherInfo = `
    <p><strong>City:</strong> ${data.name}</p>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;
  document.getElementById('weather-info').innerHTML = weatherInfo;
}

// Fetch weather data when the page loads
fetchWeather();
