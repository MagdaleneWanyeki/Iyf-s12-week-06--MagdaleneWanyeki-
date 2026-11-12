
// API key comes from config.js
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// DOM Elements
const form = document.getElementById("search-form");
const cityInput = document.getElementById("city-input");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherDisplay = document.getElementById("weather-display");
const searchHistory = document.getElementById("search-history");

// Elements to update
const cityName = document.getElementById("city-name");
const weatherIcon = document.getElementById("weather-icon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pressure");

// Get weather data
async function getWeather(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    try {
        showLoading();
        hideError();

        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("City not found");
            }

            if (response.status === 401) {
                throw new Error("Invalid API key");
            }

            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        displayWeather(data);
        saveToHistory(data.name);

    } catch (err) {
        showError(
            err.name === "TypeError"
                ? "Network error. Check your connection."
                : err.message
        );

    } finally {
        hideLoading();
    }
}

// Display weather information
function displayWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherIcon.alt = data.weather[0].description;

    temperature.textContent = `${Math.round(data.main.temp)}°C`;

    description.textContent =
        data.weather[0].description;

    feelsLike.textContent =
        `${Math.round(data.main.feels_like)}°C`;

    humidity.textContent =
        `${data.main.humidity}%`;

    wind.textContent =
        `${data.wind.speed} m/s`;

    pressure.textContent =
        `${data.main.pressure} hPa`;

    weatherDisplay.classList.remove("hidden");
}

// Show loading
function showLoading() {
    loading.classList.remove("hidden");
    weatherDisplay.classList.add("hidden");
}

// Hide loading
function hideLoading() {
    loading.classList.add("hidden");
}

// Show error
function showError(message) {
    error.textContent = message;
    error.classList.remove("hidden");
}

// Hide error
function hideError() {
    error.classList.add("hidden");
}

// Save searched city to localStorage
function saveToHistory(city) {
    let history = JSON.parse(
        localStorage.getItem("weatherHistory")
    ) || [];

    // Remove duplicate city
    history = history.filter(
        item => item.toLowerCase() !== city.toLowerCase()
    );

    // Add latest search first
    history.unshift(city);

    // Keep only 5 recent searches
    history = history.slice(0, 5);

    localStorage.setItem(
        "weatherHistory",
        JSON.stringify(history)
    );

    loadHistory();
}

// Load recent searches
function loadHistory() {
    const history = JSON.parse(
        localStorage.getItem("weatherHistory")
    ) || [];

    searchHistory.innerHTML = "";

    history.forEach(city => {
        const li = document.createElement("li");
        const button = document.createElement("button");

        button.textContent = city;

        button.addEventListener("click", () => {
            cityInput.value = city;
            getWeather(city);
        });

        li.appendChild(button);
        searchHistory.appendChild(li);
    });
}

// Search form event
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    }
});

// Initialize application
loadHistory();

