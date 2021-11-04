import image from '../images/cloudy.png';
const CELSIUM = '°';

export function renderDays(data, currentDay) {
  let fragment = new DocumentFragment();
  data.forEach((day) => {
    let div = document.createElement('div');
    div.setAttribute('class', 'day');
    div.setAttribute('id', day.day.toLowerCase());

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