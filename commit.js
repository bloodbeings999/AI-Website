// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const API_KEY = 4187a3e5d971d7a8750bed0cca0245e5'; // Replace this with your actual API key
const CITY = 'Singapore';

// Function to fetch and display weather data
async function fetchWeather() {
  try {
    console.log('Fetching weather data for:', CITY); // Debugging line

    // Fetch weather data from OpenWeatherMap API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    );

    console.log('API Response Status:', response.status); // Debugging line

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    console.log('Weather Data Received:', data); // Debugging line

    // Display the weather data on the page
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error); // Debugging line
    document.getElementById('weather-info').innerHTML =
      '<p>Unable to fetch weather data. Please check the console for details.</p>';
  }
}

// Function to display weather data on the page
function displayWeather(data) {
  // Format the weather information
  const weatherInfo = `
    <p><strong>City:</strong> ${data.name}</p>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;

  // Insert the weather information into the DOM
  document.getElementById('weather-info').innerHTML = weatherInfo;
}

// Fetch weather data when the page loads
fetchWeather();
