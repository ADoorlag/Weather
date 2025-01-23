//variable declarations
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const description = document.getElementById("description");
const lastUpdated = document.getElementById("last-updated");
const feelsLike = document.getElementById("feels-like");
const windSpeed = document.getElementById("wind-speed");
const visibility = document.getElementById("visibility");
const windGust = document.getElementById("wind-gust");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const minTemp = document.getElementById("min-temp");
const maxTemp = document.getElementById("max-temp");

const key = "7d8517efb0211f176985fee57d51facb"

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=detroit&appid=${key}`)
// .then(response => {return response.json()})
// .then(data => {console.log(data)})

// http://openweathermap.org/img/wn/03d@2x.png

// get user's current coordinates and fetch weather data for that location
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then(response => {return response.json()})
    .then(data => {

        //display weather data
        city.textContent = data.name
        temp.innerHTML = Math.round(data.main.temp - 273.15) + "&#730<sup><span>F</span></sup>"
        icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        description.textContent = data.weather[0].description
        lastUpdated.textContent = `Updated as of ${new Date(data.dt * 1000).toLocaleString()}`
        windSpeed.textContent = `${data.wind.speed} m/s`
        visibility.textContent = `${data.visibility} meters`
        windGust.textContent = `${data.wind.gust} m/s`
        pressure.textContent = `${data.main.pressure} hPa`
        humidity.textContent = `${data.main.humidity}%`
        feelsLike.innerHTML = Math.round(data.main.feels_like - 273.15) + "&#730<sup><span>F</span></sup>"
        minTemp.innerHTML = Math.round(data.main.temp_min - 273.15) + "&#730<sup><span>F</span></sup>"
        maxTemp.innerHTML = Math.round(data.main.temp_max - 273.15) + "&#730<sup><span>F</span></sup>"
    })
})