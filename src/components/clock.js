import { getTime } from '../date';
export function renderTime() {
  const el = document.createElement('div');
  el.innerText = getTime();
  el.setAttribute('class', 'test1');
  
  return el;
}