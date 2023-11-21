const apiKey = 'edcc4d09c628262de0a35e3b8054e26f';

const cityNameEl = document.getElementById('city');
const tempEl = document.getElementById('temp');
const weatherInfoEl = document.getElementById('weatherInfo');
const weatherIconEl = document.getElementById('weatherIcon');
const windInfoEl = document.getElementById('windInfo');

const weatherIcon = function weatherIcon(iconCode) {
  return `http://openweathermap.org/img/w/${iconCode}.png`;
};

//get location
async function getLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${apiKey}`;

        fetchAndRender(url);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}

getLocation();

//fetch from api
async function fetchAndRender(url) {
  const res = await fetch(url);
  const data = await res.json();
  renderData(data);
  console.log(data);
}

function renderData(resData) {
  cityNameEl.textContent = resData.name;
  tempEl.textContent = Math.trunc(resData.main.temp);
  weatherInfoEl.textContent = resData.weather[0].description.toUpperCase();

  weatherIconEl.src = weatherIcon(resData.weather[0].icon);
  windInfoEl.textContent = resData.wind.speed;
}

//weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' } ],
//weather[0].icon,
//weather[0].main,
//weather[0].description,

//base: 'stations',
//display these features in UI
//data.main.temp - temp_max/temp_min
//data.main.feels_like
//data.name
//data.weather[0].description
//data.weather[0].icon
//data.wind
//data.timezone
//data.sys.country

//update every 5 seconds
