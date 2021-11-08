import './styles/normalize.css';
import './styles/common.scss';
import './styles/styles.scss';
import './styles/font.scss';
import weatherData from './data';
import { getRoot, getGrid, getUpper } from './aceessors';
import { renderDays } from './components/days';
import { getCurrentDay } from './date';
// eslint-disable-next-line no-unused-vars
import EventObserver, { testObserver } from './EventObserver';
import { renderTime } from './components/clock';

const observer = testObserver();
// const observer = new EventObserver();



function renderClock() {
  getUpper().innerHTML= `
  <div class="light-font padding-top">
    <span>location</span>
    <h2>Kiev</h2>
    <a id="settings">Settings</a>
  </div>
  
  
  <div class="display-column padding-top light-font">
    <span>Humidity: <b>58%</b></span>
    <span>Feels Like: <b>12</b></span>
    <span>Wind: <b>WE 15ms</b></span>
  </div>
  `;
  //pointer events : none for elements
  document.getElementById('settings').addEventListener('click', () => {
    console.log(1);
  });
  const c = (e) => {
    console.log(e.target.id);
  };
  const elem = document.getElementById('grid');
  elem.addEventListener('click', c);


  getUpper().append(renderTime());
}

observer.subscribe(renderClock);

setInterval(() => {
  observer.broadcast();
}, 1000*60*60);


function init() {
  const { forecast } = weatherData;
  const currentDay = getCurrentDay();
  const renderedDays = renderDays(forecast, currentDay);

  // getRoot().addEventListener('click', (e) => {
  //   console.log(e.target);
  // }, false);

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
