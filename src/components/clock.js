import { getTime } from '../date';
export function renderTime() {
  const el = document.createElement('div');
  el.innerText = getTime();
  el.setAttribute('class', 'time');
  
  return el;
}