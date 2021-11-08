/* eslint-disable quotes */
import './styles/normalize.css';
import './styles/common.scss';
import './styles/styles.scss';
import './styles/font.scss';
import weatherData from './data';
import { getRoot, getGrid, getUpper } from './aceessors';
import { renderDays } from './components/days';
import { getCurrentDay } from './date';
import EventObserver from './EventObserver';
import { renderTime } from './components/clock';

// const observer = testObserver();
const observer = new EventObserver();

function renderClock() {
  getUpper().innerHTML= `
  <div class="light-font padding-top">
    <span>location</span>
    <h2>Kiev</h2>
  </div>
  
  
  <div class="display-column padding-top light-font">
    <span id="hum">Humidity: <b>58%</b></span>
    <span>Feels Like: <b>12</b></span>
    <span>Wind: <b>WE 15ms</b></span>
  </div>
  `;
  getUpper().append(renderTime());
}

setInterval(() => {
  observer.broadcast();
}, 1000);


function init() {
  const { forecast } = weatherData;
  const currentDay = getCurrentDay();
  const renderedDays = renderDays(forecast, currentDay);

  
  getRoot().innerHTML = `
  <div class="widget common">

    <div class="upper">
    </div>

    <div class="lower">
      <div id="grid" class="grid">
      </div>
    </div>
    
  </div>`;
  renderClock();
  getGrid().append(renderedDays);
}

init();

