//Time

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hours = [
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
];

let minutes = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];

let now = new Date();
let day = days[now.getDay()];
let hour = hours[now.getHours()];
let minute = minutes[now.getMinutes()];

//Weekdate
let weekName = document.querySelector("p.current-date");
weekName.innerHTML = `${day}`;

//Clock
let clock = document.querySelector("h4");
//clock.innerHTML = "1:00AM";
//console.log(clock);

//Time Phase

let timePhase = document.querySelector("#sun-moon");
//console.log(timePhase);
//timePhase.innerHTML = `<i class="fa-solid fa-sun"></i>`;

function sunMoon() {
  if (hour <= 5) {
    clock.innerHTML = `${hour}:${minute} AM`;
    console.log("Its morning time");
  } else if ((hour) => 5 && hour <= 11) {
    timePhase.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    clock.innerHTML = `${hour}:${minute} AM`;
    console.log("Its morning time.");
  } else if ((hour) => 12 && hour <= 19) {
    timePhase.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    clock.innerHTML = `${hour}:${minute} PM`;
    console.log("Its the middle of the day.");
  } else {
    clock.innerHTML = `${hour}:${minute} PM`;
    console.log("Its nighttime.");
  }
}

//Time
sunMoon();

//Search Engine

/*function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#citySearchInput");
  let cityName = document.querySelector("h3");
  cityName.innerHTML = `${cityInput.value}`;
}

let citySearchBar = document.querySelector("#citySearchBar");
citySearchBar.addEventListener("submit", citySearch);*/

//Real Result

function cityResult(response) {
  let cityTemp = Math.round(response.data.main.temp);
  let cityResponse = response.data.name;
  let tempDisplay = document.querySelector("h1");
  let cityDisplay = document.querySelector("h3");
  tempDisplay.innerHTML = `${cityTemp}<sup>℃</sup>`;
  cityDisplay.innerHTML = `${cityResponse.toUpperCase()}`;
}

function displayCityInput(cityInput) {
  let apiKey = "fe1483f743b581b5520a1b725af03a49";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(cityResult);
}

function citySearch(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#citySearchInput").value;
  //let cityName = document.querySelector("h3");
  displayCityInput(cityInput);
}

let citySearchBar = document.querySelector("#citySearchBar");
citySearchBar.addEventListener("submit", citySearch);

displayCityInput("NEW YORK CITY");

//Geolocation=========================================================================

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(locateLocation);
}

function locateLocation(position) {
  let apiCurrentKey = "fe1483f743b581b5520a1b725af03a49";
  let currentUnit = "metric";
  let currentApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiCurrentKey}&units=${currentUnit}`;
  axios.get(currentApiUrl).then(cityResult);
}

let currentLocationButton = document.querySelector("button#current-location");
currentLocationButton.addEventListener("click", currentLocation);
