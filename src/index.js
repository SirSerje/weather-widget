import './styles/normalize.css';
import './styles/styles.scss';
import './styles/font.scss';
import weatherData from './data';
import { getRoot, getGrid, getUpper } from './aceessors';
import { renderDays } from './components/days';
import { getCurrentDay } from './date';
import EventObserver from './EventObserver';
import { renderTime } from './components/clock';
import { fetchWeather } from './request';

const observer = new EventObserver();
function renderClock() {
  getUpper().innerHTML= '';
  getUpper().append(renderTime());
}

observer.subscribe(renderClock);

setInterval(() => {
  observer.broadcast();
}, 1000);


function init() {
  const { forecast } = weatherData;
  const currentDay = getCurrentDay();
  const renderedDays = renderDays(forecast, currentDay);

  getRoot().innerHTML = `
  <div id="ww" class="widget common">

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

// eslint-disable-next-line no-undef
fetchWeather(process.env.API_KEY).then(i => {
  console.log(i);
});