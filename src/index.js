import './styles/normalize.css';
import './styles/common.scss';
import './styles/styles.scss';
import './styles/font.scss';
import WeatherData from './data';
import { getRoot, getGrid } from './aceessors';
import { renderDays } from './components/days';
import { getCurrentDay } from './date';
import EventObserver from './EventObserver';
import { renderClock } from './components/clock';
import { getCityName } from './aceessors';
import { requestData } from './request';
import { responseAdapter, kToC } from './responseAdapter';

// eslint-disable-next-line no-unused-vars
let mainObserverInterval;
const observer = new EventObserver();
const networkObserver = new EventObserver();
const weatherData = new WeatherData();
function init() {
  getRoot().innerHTML = `
  <div class="widget common">
    <div class="upper">
    
    <div class="light-font padding-top">
    <span>location</span>
    <h2 id="cityname">Kiev</h2>
  </div>
  
  <div class="display-column padding-top light-font">
    <span>Humidity: <b id="hum">58%</b></span>
    <span>Feels Like: <b id="feels">12°</b></span>
    <span>Wind: <b id="wind">WE 15ms</b></span>
  </div>
  
    </div>

    <div class="lower">
      <div id="grid" class="grid">
      </div>
    </div>
    
  </div>`;
  renderClock();
}
function degToCompass(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return arr[(val % 16)];
}

function mileToMeters (miles) {
  return Math.round(miles/1.61);
}


function clickHandler(event) {
  if(event.target.className.split(' ').includes('day')) {
    const selectedDay = weatherData.getDayById(event.target.id);
    const {humidity, wind_deg, wind_speed, feels_like} = selectedDay;
    document.getElementById('hum').innerText = `${humidity}%`;
    document.getElementById('feels').innerText = `${kToC(feels_like.day)}°`;
    document.getElementById('wind').innerText = `${degToCompass(wind_deg)} ${mileToMeters(wind_speed)}`;
  }
}


function handleResponse(i) {
  const { timezone } = i;
  weatherData.updateData(responseAdapter(i)); 
  getCityName().innerText = timezone;
  const renderedDays = renderDays(responseAdapter(i), getCurrentDay());
  getGrid().append(renderedDays);
}

function handleError(error) {
  console.warn(error);
  getCityName().innerText = '⚠️';
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  mainObserverInterval = setInterval(() => observer.broadcast(), 1000);
  observer.subscribe(renderClock);
  networkObserver.subscribe(handleResponse);
  init();
  
  getGrid().addEventListener('click', clickHandler);

  getCoordinates().then(({lat, lon}) => {
    requestData(lat,lon).then(i => {
      networkObserver.broadcast(i);
    }).catch(handleError);
  });
  
  
});

const getCoordinates = () => new Promise((resolve, reject) => {
  if(navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(`Coordinates: ${lat} ${lon}`);
      resolve({lat, lon});
    });
  } else {
    reject(new Error('cant get GPS '));
  }
});

getCoordinates();


window.addEventListener('unload', () => {
  clearInterval(mainObserverInterval);
});
