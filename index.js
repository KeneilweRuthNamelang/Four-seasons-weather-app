function updateWeather(response) {
  let currentTemperatureElement = document.querySelector("#current-temperature");
  let currentTemperature = response.data.temperature.current;
  let cityElement = document.querySelector("#searched-city");
  let descriptionElement = document.querySelector("#sky-description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#current-time");
  let date = new Date (response.data.time *1000);

  cityElement.innerHTML = response.data.city;
  currentTemperatureElement.innerHTML = Math.round(currentTemperature);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
   let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days [date.getDay()];

  if (minutes < 10) {minutes = `0${minutes}`;}
  if (hours < 10) {hours = `0${hours}`;}

  return `${day} ${hours}:${minutes}`;
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

searchCity("Welkom");
