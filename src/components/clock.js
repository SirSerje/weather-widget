import { getTime } from '../date';
import { getUpper } from '../aceessors';

export function renderTime() {
  const el = document.createElement('div');
  el.innerText = getTime();
  el.setAttribute('class', 'time');
  
  return el;
}

export function renderClock() {
  getUpper().innerHTML= `
  <div class="light-font padding-top">
    <span>location</span>
    <h2>Kiev</h2>
  </div>
  
  <div class="display-column padding-top light-font">
    <span>Humidity: <b id="hum">58%</b></span>
    <span>Feels Like: <b>12</b></span>
    <span>Wind: <b>WE 15ms</b></span>
  </div>
  `;
  
  getUpper().append(renderTime());
}