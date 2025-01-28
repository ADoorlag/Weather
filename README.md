
# Weather App

The Weather App is a simple web application that provides real-time weather information for your current location or any city you search for. The app uses the OpenWeatherMap API to fetch and display weather data, including temperature, humidity, wind speed, visibility, and more.


## Features

- Current Location Weather: Automatically fetches and displays weather data for your current location using geolocation.
- City Search: Allows you to search for weather data in any city by entering its name.
- Real-Time Updates: Displays current weather, temperature, humidity, and other details.
- Responsive Design: Optimized for both desktop and mobile devices.


## How it Works

1. On load, the app:
- Uses the browser's geolocation to fetch latitude and longitude.
- Fetches weather data for the current location using the OpenWeatherMap API.
- Displays the weather data on the page.
2. When you search for a city:
- The app fetches weather data for the entered city name.
- Updates the displayed weather information with the new data.
3. The weather details displayed include:
- Current temperature
- Weather description (e.g., sunny, cloudy, rainy)
- Feels like temperature
- Wind speed and gusts
- Visibility, humidity, and atmospheric pressure
- Minimum and maximum temperatures
## Technologies Used

- HTML: Markup for the structure of the app.
- CSS: Styling for a visually appealing interface.
- JavaScript: Logic for fetching and rendering weather data.
- OpenWeatherMap API: Provides real-time weather data.
## Design and UI

- Search Bar: Allows users to search for a city.
- Weather Display: Shows weather details in a clean and responsive layout.
- Icons and Background: Dynamic weather icons and a background that enhances the user experience.
## Future Improvements

- Add dynamic backgrounds based on weather conditions (e.g., sunny, rainy, snowy).
- Include multi-day weather forecasts.
- Improve accessibility for better user experience.
- Add a new loading spinner while fetching data.
## License

[MIT](https://choosealicense.com/licenses/mit/)

