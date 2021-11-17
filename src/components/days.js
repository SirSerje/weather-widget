import cloudly from '../images/cloudy.png';
import partly from '../images/partly_cloudy.png';
import rainLight from '../images/rain_light.png';
import rainCloud from '../images/rain_s_cloudy.png';
import sunny from '../images/sunny.png';

const imageToWeather = {
  'Clouds' : cloudly,
  'Snow' : cloudly,
  'PartlyCloud' : partly, // ?
  'Rain' : rainLight,
  'RainCloud' : rainCloud, // ?
  'Clear' : sunny,
};

const CELSIUM = '°';
const DAYS_TO_DISPLAY = 8;

export function renderDays(data, currentDay) {
  const a = new Date();
  let fragment = new DocumentFragment();
  
  data.forEach((day, idx) => {
    if(idx > DAYS_TO_DISPLAY-1) {
      return;
    }
    let div = document.createElement('div');
    div.setAttribute('class', 'day');
    div.setAttribute('id', day.dt);

    const isToday = day.date.getFullYear() === a.getFullYear() && day.date.getMonth()===a.getMonth() && day.date.getDate()===a.getDate();
    console.log(isToday);
    if(isToday)
      div.classList.add('highlighted');
    div.innerHTML = `
    <p>
      <span style="font-size: 10px;">${day.month}</span>
      <b>${day.numDay}</b>
      <span style="font-size: 10px;">${day.day}</span>
    </p>
    <img src="${imageToWeather[day.weather[0].main]}"></img>
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