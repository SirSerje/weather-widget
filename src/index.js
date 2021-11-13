import './styles/normalize.css';
import './styles/common.scss';
import './styles/styles.scss';
import './styles/font.scss';
import weatherData from './data';
import { getRoot, getGrid } from './aceessors';
import { renderDays } from './components/days';
import { getCurrentDay } from './date';
import EventObserver from './EventObserver';
import { renderClock } from './components/clock';

// eslint-disable-next-line no-unused-vars
let mainObserverInterval;
const observer = new EventObserver();

function init() {
  const { forecast } = weatherData;
  const currentDay = getCurrentDay();
  const renderedDays = renderDays(forecast, currentDay);

  getRoot().innerHTML = `
  <div class="widget common">
    <div class="upper">
    
    <div class="light-font padding-top">
    <span>location</span>
    <h2>Kiev</h2>
  </div>
  
  <div class="display-column padding-top light-font">
    <span>Humidity: <b id="hum">58%</b></span>
    <span>Feels Like: <b>12</b></span>
    <span>Wind: <b>WE 15ms</b></span>
  </div>
  
    </div>

    <div class="lower">
      <div id="grid" class="grid">
      </div>
    </div>
    
  </div>`;
  renderClock();
  getGrid().append(renderedDays);
}

function clickHandler(event) {
  if(event.target.className.split(' ').includes('day')) {
    const { humidity } = weatherData.getDayById(event.target.id);
    document.getElementById('hum').innerText = `${humidity}%`;
  }
}

// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  mainObserverInterval = setInterval(() => observer.broadcast(), 1000);
  observer.subscribe(renderClock);
  init();
  getGrid().addEventListener('click', clickHandler);
});

window.addEventListener('unload', () => {
  clearInterval(mainObserverInterval);
});
