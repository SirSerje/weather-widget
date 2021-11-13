import image from '../images/cloudy.png';

const CELSIUM = '°';
const DAYS_TO_DISPLAY = 8;

export function renderDays(data, currentDay) {
  let fragment = new DocumentFragment();
  
  data.forEach((day, idx) => {
    if(idx > DAYS_TO_DISPLAY-1) {
      return;
    }
    let div = document.createElement('div');
    div.setAttribute('class', 'day');
    div.setAttribute('id', idx);

    if(day.day.toLowerCase() === currentDay.toLowerCase()) {
      div.classList.add('highlighted');
    }

    div.innerHTML = `<p>${day.day}</p>
    <img src="${image}"></img>
          <div class="temperature">
      <span class="hi">${day.hi}${CELSIUM}</span>
      <span class="low">${day.low}${CELSIUM}</span>
      <div>`;

      
    fragment.append(div);
  });
  
  return fragment;
}


/* 
function reportWindowSize(e) {
  console.log(`${e.target.innerWidth} x ${e.target.innerHeight}`);
}
window.addEventListener('resize', reportWindowSize);

 */