function updateWeather(response) {
  let currentTemperatureElement = document.querySelector("#current-temperature");
  let currentTemperature = response.data.temperature.current;
  let cityElement = document.querySelector("#searched-city");

  cityElement.innerHTML = response.data.city;
  currentTemperatureElement.innerHTML = Math.round(currentTemperature);
}

function searchCity(city) {
  let apiKey = "117da7948a04330f7fb96d315918tcdo";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function conductSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", conductSearch);

searchCity("Welkom")