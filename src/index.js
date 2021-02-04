function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

//function updateCityDetails(event) {
//  event.preventDefault();

//  let cityName = document.querySelector("input");
//  let h1 = document.querySelector("h1");
//  h1.innerHTML = cityName.value;
// }

function convertToFahrenheit(event) {
  event.preventDefault();
  let tempFahrenheit = document.querySelector("#temperature");
  tempFahrenheit.innerHTML = 50;
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let tempCelsius = document.querySelector("#temperature");
  tempCelsius.innerHTML = 10;
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToCelsius);

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("h2").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "0e00fd71ae37e49c258cd1cf852920e8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

// function handleSubmit(event) {
//  event.preventDefault();
//  let city = document.querySelector("#city-input").value;
//  searchCity(city);
// }

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "0e00fd71ae37e49c258cd1cf852920e8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("button");
searchForm.addEventListener("click", handleSubmit);

//Updating city on click
//let searchEvent = document.querySelector("button");
//searchEvent.addEventListener("click", updateCityDetails);

//let searchForm = document.querySelector("#search-city");
//searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

//let currentLocationButton = document.querySelector("#current-location-button");
//currentLocationButton.addEventListener("click", displayCurrentLocation);

searchCity("New York");
/////////////////////////////////////////////////////////////////

//Updating city on click
//let searchEvent = document.querySelector("button");
//searchEvent.addEventListener("click", updateCityDetails);
