import './styles/normalize.css';
import './styles/common.scss';
import './styles/styles.scss';
import './styles/font.scss';
import WeatherData from './data';
import { getRoot, getGrid } from './aceessors';
import { renderDays } from './components/days';
import EventObserver from './EventObserver';
import { renderClock } from './components/clock';
import { getCityName } from './aceessors';
import { requestData } from './request';
import { responseAdapter, kToC } from './responseAdapter';
import { degToCompass, mileToMeters } from './utils';
import { ROOT_DEFAULT } from './staticInnerHtml';
import { getCoordinates } from './coords';

let mainObserverInterval;
const observer = new EventObserver();
const networkObserver = new EventObserver();
const weatherData = new WeatherData();

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
  const renderedDays = renderDays(responseAdapter(i));
  getGrid().append(renderedDays);
}

function handleError(error) {
  console.warn(error);
  getCityName().innerText = '⚠️';
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  // set timer for clock
  mainObserverInterval = setInterval(() => observer.broadcast(), 1000);
  // make subscription for event observers
  observer.subscribe(renderClock);
  networkObserver.subscribe(handleResponse);
  // draw static
  getRoot().innerHTML = ROOT_DEFAULT;
  renderClock();
  // add listener for grid with days  
  getGrid().addEventListener('click', clickHandler);
  // check coordinates, then request data, than draw days
  getCoordinates().then(({lat, lon}) => {
    requestData(lat,lon).then(i => {
      networkObserver.broadcast(i);
    }).catch(handleError);
  });
});

window.addEventListener('unload', () => {
  clearInterval(mainObserverInterval);
});
