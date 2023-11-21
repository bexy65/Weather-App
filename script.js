const api = 'edcc4d09c628262de0a35e3b8054e26f';
const lat = '42.697708';
const lon = '23.321867';
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${api}`;

//Selecting HTML elements
const cityName = document.getElementById('cityName');
const degrees = document.getElementById('degrees');
const feelsLike = document.getElementById('feelsLike');
const clouds = document.getElementById('clouds');
const cloudIcon = document.getElementById('cloudIcon');
const wind = document.getElementById('wind');

const assets = {
  cloudy: 'Cloudy',
  clear: 'Clear',
};

//fetch from api
const message = document.getElementById('message');
async function checkWeather() {
  const res = await fetch(url);
  const data = await res.json();

  cityName.textContent = data.name;
  degrees.textContent = `${data.main.temp} C°`;
  clouds.textContent = data.clouds.all > 50 ? assets.cloudy : assets.clear;
  wind.textContent = data.wind.speed;

  console.log(data);
}

checkWeather();

//display these features in UI
//data.main.temp - temp_max/temp_min
//data.main.feels_like
//data.name
//data.weather[]
//data.weather[0].description
//data.weather[0].icon
//data.wind
//data.timezone
//data.sys.country

//update every 5 seconds
