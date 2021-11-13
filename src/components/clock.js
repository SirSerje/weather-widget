import { getTime } from '../date';
import { getUpper } from '../aceessors';

export function renderTime() {
  const el = document.createElement('div');
  el.innerText = getTime();
  el.setAttribute('class', 'time');
  el.setAttribute('id', 'clock');
  
  return el;
}

export function renderClock() {
  const clockSelector = document.getElementById('clock');
  if(clockSelector) {
    clockSelector.innerText = getTime();
  } else {
    getUpper().append(renderTime());
  }
}