const key = "7d8517efb0211f176985fee57d51facb"

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=detroit&appid=${key}`)
// .then(response => {return response.json()})
// .then(data => {console.log(data)})

navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
    .then(response => {return response.json()})
    .then(data => {
        const city = data.name
        const temp = Math.round(data.main.temp - 273.15)
        const icon = data.weather[0].icon
        const desc = data.weather[0].description
        const feelsLike = Math.round(data.main.feels_like - 273.15)
        const windSpeed = data.wind.speed
        const visibility = data.visibility
        const windGust = data.wind.gust
        const pressure = data.main.pressure
        const humidity = data.main.humidity
        
        console.log(data)
        console.log("city:", city,"temp:", temp, "icon:", icon, "desc:", desc, "feelsLike:", feelsLike, "windSpeed:", windSpeed, "visibility:", visibility, "Wind Gust:", windGust, "pressure:", pressure, "humidity:", humidity)
    })
})